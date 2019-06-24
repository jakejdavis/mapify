import { Component } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { ApiService } from './api/services';
import { CurrentUserProfile } from './api/models';
import { registerLocaleData } from '@angular/common';

declare var vis: any;

var _nodes = [];

/**
 * OAuth Configuration
 */
export const authConfig: AuthConfig = {
  oidc: false,
  responseType: 'token',
  clientId: '',
  redirectUri: window.location.origin,
  loginUrl: 'https://accounts.spotify.com/authorize',
  logoutUrl: ' https://accounts.spotify.com/en/logout ',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
  scope: 'user-read-private user-read-email user-read-recently-played user-library-read',
  dummyClientSecret: '',
  requireHttps: false,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  profile: CurrentUserProfile;
  isAuthenticated = false;
  loading = false;

  edges = [];
  nodes = [];

  network;

  constructor(private oauthService: OAuthService, private spotifyApi: ApiService) {
    this.oauthService.configure(authConfig);
    this.oauthService.setStorage(sessionStorage);

    this.oauthService.tryLogin().then(success => {
      if (success) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
        this.login();
      }
    }).catch(error => console.error('Error al hacer login ', error));
  }

  login() { this.oauthService.initImplicitFlow(); }
  logout() { this.oauthService.logOut(); }

  resetData() {
    _nodes = [];
    this.nodes = [];
    this.edges = [];
    this.network = null;
  }

  async getDataLarge() {
    this.resetData();
    this.loading = true;

    const tracks = await this.getAllSavedTracks();
    const artists = [];
    tracks.forEach(track => {
      track.track.artists.forEach(artist => {
        if (artists.filter(a => a.id === artist.id).length === 0) {
          artists.push(artist);
        }
      });
    });

    const setAsyncTimeout = (cb, timeout = 0) => new Promise(resolve => {
        setTimeout(() => {
            cb();
            resolve();
        }, timeout);
    });

    for (const artist of artists) {
      await setAsyncTimeout(async () => {
        const relatedArtists = await this.spotifyApi.getArtistsIdRelatedArtists(artist.id).toPromise();
        for (const relatedArtist of relatedArtists.artists) {
          if (this.nodes.filter(n => n.id === relatedArtist.id).length === 0) {
            this.nodes.push({
              id: relatedArtist.id,
              label: relatedArtist.name,
              image: relatedArtist.images[relatedArtist.images.length - 1].url,
              shape: 'circularImage',
              url: 'https://open.spotify.com/artist/' + relatedArtist.id
            });
          }
          this.edges.push({
            from: relatedArtist.id,
            to: artist.id
          });
        }
      }, 100);
    }

    this.plotGraph();
  }

  async getData() {
    this.resetData()
    this.loading = true;

    this.spotifyApi
    .getMe()
    .subscribe(data => {
      this.profile = data;
    });

    const tracks = await this.getAllSavedTracks();
    const artists = [];
    tracks.forEach(track => {
      track.track.artists.forEach(artist => {
        if (artists.filter(a => a.id === artist.id).length === 0) {
          artists.push(artist);
        }
      });
    });

    await artists.forEach(async (artist) =>  {
      this.nodes.push({
        id: artist.id,
        label: artist.name,
        url: 'https://open.spotify.com/artist/' + artist.id
      });
    });

    const setAsyncTimeout = (cb, timeout = 0) => new Promise(resolve => {
        setTimeout(() => {
            cb();
            resolve();
        }, timeout);
    });

    for (const node of this.nodes) {
      await setAsyncTimeout(async () => {
        const relatedArtists = await this.spotifyApi.getArtistsIdRelatedArtists(node.id).toPromise();
        for (const relatedArtist of relatedArtists.artists) {
          if (this.nodes.filter(n => n.id === relatedArtist.id).length > 0) {
            const nodeIndex = this.nodes.findIndex(p => p.id === relatedArtist.id);
            if (nodeIndex >= 0) {
              if (typeof relatedArtist.images[0].url !== 'undefined') {
                this.nodes[nodeIndex].image = relatedArtist.images[relatedArtist.images.length - 1].url;
                this.nodes[nodeIndex].shape = 'circularImage';
              }
            }
            this.edges.push({
              from: relatedArtist.id,
              to: node.id
            });
          }
        }
      }, 100);
    }

    this.plotGraph();
  }

  plotGraph() {
    const container = document.getElementById('visualization');
    const data = {nodes: this.nodes, edges: this.edges};
    const options = {
      nodes: {
        shape: 'dot',
        scaling: {
          min: 10,
          max: 30,
          label: {
            min: 8,
            max: 30,
            drawThreshold: 3,
            maxVisible: 20
          }
        }
      },
      edges: {
        width: 0.15,
        color: {inherit: 'from'},
        smooth: {
          type: 'continuous'
        }
      },
      physics: {
        enabled: true,
        solver: 'forceAtlas2Based'
      },
      interaction: {
        tooltipDelay: 200
      },
      layout: {
        randomSeed: 191006,
        improvedLayout: false
      }
    };
    this.network = new vis.Network(container, data, options);
    _nodes = this.nodes
    this.network.on( 'doubleClick', function(properties) {
      console.log(properties)
        const id = properties.nodes[0];
        const node = _nodes.filter(n => n.id === id);
        console.log(node)
        window.open(node[0].url, '_blank');
    });
    this.loading = false;
  }

  async getAllSavedTracks() {
    let tracks = [];
    let curTracks;
    let offset = 0;
    do {
      curTracks = (await this.spotifyApi.getMeTracks({offset: offset, limit: 50}).toPromise());
      tracks = [...tracks, ...curTracks.items];
      offset += curTracks.items.length;
    } while (tracks.length < curTracks.total);
    return tracks;
  }

  get givenName() {
    const claims = this.oauthService.getIdentityClaims();

    if (!claims) {
      return null;
    }
    return claims['name'];
  }
}
