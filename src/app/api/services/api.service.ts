/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Album } from '../models/album';
import { TrackSimplePage } from '../models/track-simple-page';
import { Artist } from '../models/artist';
import { AlbumSimplePage } from '../models/album-simple-page';
import { Track } from '../models/track';
import { CategoryPage } from '../models/category-page';
import { Category } from '../models/category';
import { PlaylistSimplePage } from '../models/playlist-simple-page';
import { FeaturedPlaylists } from '../models/featured-playlists';
import { CurrentUserProfile } from '../models/current-user-profile';
import { UserFollowed } from '../models/user-followed';
import { SavedTrackPage } from '../models/saved-track-page';
import { Search } from '../models/search';
import { UserProfile } from '../models/user-profile';
import { Playlist } from '../models/playlist';
import { PlaylistSnapshot } from '../models/playlist-snapshot';
import { PlaylistTrackPage } from '../models/playlist-track-page';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly getAlbumsPath = '/albums';
  static readonly getAlbumsIdPath = '/albums/{id}';
  static readonly getAlbumsIdTracksPath = '/albums/{id}/tracks';
  static readonly getArtistsPath = '/artists';
  static readonly getArtistsIdPath = '/artists/{id}';
  static readonly getArtistsIdAlbumsPath = '/artists/{id}/albums';
  static readonly getArtistsIdRelatedArtistsPath = '/artists/{id}/related-artists';
  static readonly getArtistsIdTopTracksPath = '/artists/{id}/top-tracks';
  static readonly getBrowseCategoriesPath = '/browse/categories';
  static readonly getBrowseCategoriesCategoryIdPath = '/browse/categories/{category_id}';
  static readonly getBrowseCategoriesCategoryIdPlaylistsPath = '/browse/categories/{category_id}/playlists';
  static readonly getBrowseFeaturedPlaylistsPath = '/browse/featured-playlists';
  static readonly getBrowseNewReleasesPath = '/browse/new-releases';
  static readonly getMePath = '/me';
  static readonly deleteMeFollowingPath = '/me/following';
  static readonly getMeFollowingPath = '/me/following';
  static readonly putMeFollowingPath = '/me/following';
  static readonly getMeFollowingContainsPath = '/me/following/contains';
  static readonly deleteMeTracksPath = '/me/tracks';
  static readonly getMeTracksPath = '/me/tracks';
  static readonly putMeTracksPath = '/me/tracks';
  static readonly getMeTracksContainsPath = '/me/tracks/contains';
  static readonly getSearchPath = '/search';
  static readonly getTracksPath = '/tracks';
  static readonly getTracksIdPath = '/tracks/{id}';
  static readonly getUsersUserIdPath = '/users/{user_id}';
  static readonly getUsersUserIdPlaylistsPath = '/users/{user_id}/playlists';
  static readonly postUsersUserIdPlaylistsPath = '/users/{user_id}/playlists';
  static readonly getUsersUserIdPlaylistsPlaylistIdPath = '/users/{user_id}/playlists/{playlist_id}';
  static readonly putUsersUserIdPlaylistsPlaylistIdPath = '/users/{user_id}/playlists/{playlist_id}';
  static readonly deleteUsersUserIdPlaylistsPlaylistIdFollowersPath = '/users/{user_id}/playlists/{playlist_id}/followers';
  static readonly putUsersUserIdPlaylistsPlaylistIdFollowersPath = '/users/{user_id}/playlists/{playlist_id}/followers';
  static readonly getUsersUserIdPlaylistsPlaylistIdFollowersContainsPath = '/users/{user_id}/playlists/{playlist_id}/followers/contains';
  static readonly deleteUsersUserIdPlaylistsPlaylistIdTracksPath = '/users/{user_id}/playlists/{playlist_id}/tracks';
  static readonly getUsersUserIdPlaylistsPlaylistIdTracksPath = '/users/{user_id}/playlists/{playlist_id}/tracks';
  static readonly postUsersUserIdPlaylistsPlaylistIdTracksPath = '/users/{user_id}/playlists/{playlist_id}/tracks';
  static readonly putUsersUserIdPlaylistsPlaylistIdTracksPath = '/users/{user_id}/playlists/{playlist_id}/tracks';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * [Get Several Albums](https://developer.spotify.com/web-api/get-several-albums/)
   * @param params The `ApiService.GetAlbumsParams` containing the following parameters:
   *
   * - `ids`: A comma-separated list of IDs
   *
   * - `market`: The market (an ISO 3166-1 alpha-2 country code)
   *
   * @return OK
   */
  getAlbumsResponse(params: ApiService.GetAlbumsParams): __Observable<__StrictHttpResponse<{albums?: Array<Album>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.ids != null) __params = __params.set('ids', params.ids.toString());
    if (params.market != null) __params = __params.set('market', params.market.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/albums`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{albums?: Array<Album>}>;
      })
    );
  }
  /**
   * [Get Several Albums](https://developer.spotify.com/web-api/get-several-albums/)
   * @param params The `ApiService.GetAlbumsParams` containing the following parameters:
   *
   * - `ids`: A comma-separated list of IDs
   *
   * - `market`: The market (an ISO 3166-1 alpha-2 country code)
   *
   * @return OK
   */
  getAlbums(params: ApiService.GetAlbumsParams): __Observable<{albums?: Array<Album>}> {
    return this.getAlbumsResponse(params).pipe(
      __map(_r => _r.body as {albums?: Array<Album>})
    );
  }

  /**
   * [Get an Album](https://developer.spotify.com/web-api/get-album/)
   * @param params The `ApiService.GetAlbumsIdParams` containing the following parameters:
   *
   * - `id`: The Spotify ID for the album
   *
   * - `market`: The market (an ISO 3166-1 alpha-2 country code)
   *
   * @return OK
   */
  getAlbumsIdResponse(params: ApiService.GetAlbumsIdParams): __Observable<__StrictHttpResponse<Album>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.market != null) __params = __params.set('market', params.market.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/albums/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Album>;
      })
    );
  }
  /**
   * [Get an Album](https://developer.spotify.com/web-api/get-album/)
   * @param params The `ApiService.GetAlbumsIdParams` containing the following parameters:
   *
   * - `id`: The Spotify ID for the album
   *
   * - `market`: The market (an ISO 3166-1 alpha-2 country code)
   *
   * @return OK
   */
  getAlbumsId(params: ApiService.GetAlbumsIdParams): __Observable<Album> {
    return this.getAlbumsIdResponse(params).pipe(
      __map(_r => _r.body as Album)
    );
  }

  /**
   * [Get an Album's Tracks](https://developer.spotify.com/web-api/get-albums-tracks/)
   * @param params The `ApiService.GetAlbumsIdTracksParams` containing the following parameters:
   *
   * - `id`: The Spotify ID for the album
   *
   * - `offset`: The index of the first item to return
   *
   * - `market`: The market (an ISO 3166-1 alpha-2 country code)
   *
   * - `limit`: The maximum number of items to return
   *
   * @return OK
   */
  getAlbumsIdTracksResponse(params: ApiService.GetAlbumsIdTracksParams): __Observable<__StrictHttpResponse<TrackSimplePage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.market != null) __params = __params.set('market', params.market.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/albums/${params.id}/tracks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TrackSimplePage>;
      })
    );
  }
  /**
   * [Get an Album's Tracks](https://developer.spotify.com/web-api/get-albums-tracks/)
   * @param params The `ApiService.GetAlbumsIdTracksParams` containing the following parameters:
   *
   * - `id`: The Spotify ID for the album
   *
   * - `offset`: The index of the first item to return
   *
   * - `market`: The market (an ISO 3166-1 alpha-2 country code)
   *
   * - `limit`: The maximum number of items to return
   *
   * @return OK
   */
  getAlbumsIdTracks(params: ApiService.GetAlbumsIdTracksParams): __Observable<TrackSimplePage> {
    return this.getAlbumsIdTracksResponse(params).pipe(
      __map(_r => _r.body as TrackSimplePage)
    );
  }

  /**
   * [Get Several Artists](https://developer.spotify.com/web-api/get-several-artists/)
   * @param ids A comma-separated list of IDs
   * @return OK
   */
  getArtistsResponse(ids: string): __Observable<__StrictHttpResponse<{artists?: Array<Artist>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (ids != null) __params = __params.set('ids', ids.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/artists`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{artists?: Array<Artist>}>;
      })
    );
  }
  /**
   * [Get Several Artists](https://developer.spotify.com/web-api/get-several-artists/)
   * @param ids A comma-separated list of IDs
   * @return OK
   */
  getArtists(ids: string): __Observable<{artists?: Array<Artist>}> {
    return this.getArtistsResponse(ids).pipe(
      __map(_r => _r.body as {artists?: Array<Artist>})
    );
  }

  /**
   * [Get an Artist](https://developer.spotify.com/web-api/get-artist/)
   * @param id The Spotify ID for the artist
   * @return OK
   */
  getArtistsIdResponse(id: string): __Observable<__StrictHttpResponse<Artist>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/artists/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Artist>;
      })
    );
  }
  /**
   * [Get an Artist](https://developer.spotify.com/web-api/get-artist/)
   * @param id The Spotify ID for the artist
   * @return OK
   */
  getArtistsId(id: string): __Observable<Artist> {
    return this.getArtistsIdResponse(id).pipe(
      __map(_r => _r.body as Artist)
    );
  }

  /**
   * [Get an Artist's Albums](https://developer.spotify.com/web-api/get-artists-albums/)
   * @param params The `ApiService.GetArtistsIdAlbumsParams` containing the following parameters:
   *
   * - `id`: The Spotify ID for the artist
   *
   * - `offset`: The index of the first item to return
   *
   * - `market`: The market (an ISO 3166-1 alpha-2 country code)
   *
   * - `limit`: The maximum number of items to return
   *
   * - `album_type`: Filter by album types
   *
   * @return OK
   */
  getArtistsIdAlbumsResponse(params: ApiService.GetArtistsIdAlbumsParams): __Observable<__StrictHttpResponse<AlbumSimplePage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.market != null) __params = __params.set('market', params.market.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.albumType != null) __params = __params.set('album_type', params.albumType.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/artists/${params.id}/albums`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AlbumSimplePage>;
      })
    );
  }
  /**
   * [Get an Artist's Albums](https://developer.spotify.com/web-api/get-artists-albums/)
   * @param params The `ApiService.GetArtistsIdAlbumsParams` containing the following parameters:
   *
   * - `id`: The Spotify ID for the artist
   *
   * - `offset`: The index of the first item to return
   *
   * - `market`: The market (an ISO 3166-1 alpha-2 country code)
   *
   * - `limit`: The maximum number of items to return
   *
   * - `album_type`: Filter by album types
   *
   * @return OK
   */
  getArtistsIdAlbums(params: ApiService.GetArtistsIdAlbumsParams): __Observable<AlbumSimplePage> {
    return this.getArtistsIdAlbumsResponse(params).pipe(
      __map(_r => _r.body as AlbumSimplePage)
    );
  }

  /**
   * [Get an Artist's Related Artists](https://developer.spotify.com/web-api/get-related-artists/)
   * @param id The Spotify ID for the artist
   * @return OK
   */
  getArtistsIdRelatedArtistsResponse(id: string): __Observable<__StrictHttpResponse<{artists?: Array<Artist>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/artists/${id}/related-artists`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{artists?: Array<Artist>}>;
      })
    );
  }
  /**
   * [Get an Artist's Related Artists](https://developer.spotify.com/web-api/get-related-artists/)
   * @param id The Spotify ID for the artist
   * @return OK
   */
  getArtistsIdRelatedArtists(id: string): __Observable<{artists?: Array<Artist>}> {
    return this.getArtistsIdRelatedArtistsResponse(id).pipe(
      __map(_r => _r.body as {artists?: Array<Artist>})
    );
  }

  /**
   * [Get an Artist's Top Tracks](https://developer.spotify.com/web-api/get-artists-top-tracks/)
   * @param params The `ApiService.GetArtistsIdTopTracksParams` containing the following parameters:
   *
   * - `id`: The Spotify ID for the artist
   *
   * - `country`: The country (an ISO 3166-1 alpha-2 country code)
   *
   * @return OK
   */
  getArtistsIdTopTracksResponse(params: ApiService.GetArtistsIdTopTracksParams): __Observable<__StrictHttpResponse<{tracks?: Array<Track>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.country != null) __params = __params.set('country', params.country.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/artists/${params.id}/top-tracks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{tracks?: Array<Track>}>;
      })
    );
  }
  /**
   * [Get an Artist's Top Tracks](https://developer.spotify.com/web-api/get-artists-top-tracks/)
   * @param params The `ApiService.GetArtistsIdTopTracksParams` containing the following parameters:
   *
   * - `id`: The Spotify ID for the artist
   *
   * - `country`: The country (an ISO 3166-1 alpha-2 country code)
   *
   * @return OK
   */
  getArtistsIdTopTracks(params: ApiService.GetArtistsIdTopTracksParams): __Observable<{tracks?: Array<Track>}> {
    return this.getArtistsIdTopTracksResponse(params).pipe(
      __map(_r => _r.body as {tracks?: Array<Track>})
    );
  }

  /**
   * [Get a List of Browse Categories](https://developer.spotify.com/web-api/get-list-categories/)
   * @param params The `ApiService.GetBrowseCategoriesParams` containing the following parameters:
   *
   * - `offset`: The index of the first item to return
   *
   * - `locale`: The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)".
   *
   * - `limit`: The maximum number of items to return
   *
   * - `country`: The country (an ISO 3166-1 alpha-2 country code)
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  getBrowseCategoriesResponse(params: ApiService.GetBrowseCategoriesParams): __Observable<__StrictHttpResponse<CategoryPage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.country != null) __params = __params.set('country', params.country.toString());
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/browse/categories`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryPage>;
      })
    );
  }
  /**
   * [Get a List of Browse Categories](https://developer.spotify.com/web-api/get-list-categories/)
   * @param params The `ApiService.GetBrowseCategoriesParams` containing the following parameters:
   *
   * - `offset`: The index of the first item to return
   *
   * - `locale`: The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)".
   *
   * - `limit`: The maximum number of items to return
   *
   * - `country`: The country (an ISO 3166-1 alpha-2 country code)
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  getBrowseCategories(params: ApiService.GetBrowseCategoriesParams): __Observable<CategoryPage> {
    return this.getBrowseCategoriesResponse(params).pipe(
      __map(_r => _r.body as CategoryPage)
    );
  }

  /**
   * [Get a Single Browse Category](https://developer.spotify.com/web-api/get-category/)
   * @param params The `ApiService.GetBrowseCategoriesCategoryIdParams` containing the following parameters:
   *
   * - `category_id`: The Spotify ID of the category you wish to fetch.
   *
   * - `locale`: The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)".
   *
   * - `country`: The country (an ISO 3166-1 alpha-2 country code)
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  getBrowseCategoriesCategoryIdResponse(params: ApiService.GetBrowseCategoriesCategoryIdParams): __Observable<__StrictHttpResponse<Category>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    if (params.country != null) __params = __params.set('country', params.country.toString());
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/browse/categories/${params.categoryId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Category>;
      })
    );
  }
  /**
   * [Get a Single Browse Category](https://developer.spotify.com/web-api/get-category/)
   * @param params The `ApiService.GetBrowseCategoriesCategoryIdParams` containing the following parameters:
   *
   * - `category_id`: The Spotify ID of the category you wish to fetch.
   *
   * - `locale`: The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)".
   *
   * - `country`: The country (an ISO 3166-1 alpha-2 country code)
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  getBrowseCategoriesCategoryId(params: ApiService.GetBrowseCategoriesCategoryIdParams): __Observable<Category> {
    return this.getBrowseCategoriesCategoryIdResponse(params).pipe(
      __map(_r => _r.body as Category)
    );
  }

  /**
   * [Get a Category's playlists](https://developer.spotify.com/web-api/get-categorys-playlists/)
   * @param params The `ApiService.GetBrowseCategoriesCategoryIdPlaylistsParams` containing the following parameters:
   *
   * - `category_id`: The Spotify ID of the category you wish to fetch.
   *
   * - `offset`: The index of the first item to return
   *
   * - `limit`: The maximum number of items to return
   *
   * - `country`: The country (an ISO 3166-1 alpha-2 country code)
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  getBrowseCategoriesCategoryIdPlaylistsResponse(params: ApiService.GetBrowseCategoriesCategoryIdPlaylistsParams): __Observable<__StrictHttpResponse<{playlists?: PlaylistSimplePage}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.country != null) __params = __params.set('country', params.country.toString());
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/browse/categories/${params.categoryId}/playlists`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{playlists?: PlaylistSimplePage}>;
      })
    );
  }
  /**
   * [Get a Category's playlists](https://developer.spotify.com/web-api/get-categorys-playlists/)
   * @param params The `ApiService.GetBrowseCategoriesCategoryIdPlaylistsParams` containing the following parameters:
   *
   * - `category_id`: The Spotify ID of the category you wish to fetch.
   *
   * - `offset`: The index of the first item to return
   *
   * - `limit`: The maximum number of items to return
   *
   * - `country`: The country (an ISO 3166-1 alpha-2 country code)
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  getBrowseCategoriesCategoryIdPlaylists(params: ApiService.GetBrowseCategoriesCategoryIdPlaylistsParams): __Observable<{playlists?: PlaylistSimplePage}> {
    return this.getBrowseCategoriesCategoryIdPlaylistsResponse(params).pipe(
      __map(_r => _r.body as {playlists?: PlaylistSimplePage})
    );
  }

  /**
   * [Get a List of Featured Playlists](https://developer.spotify.com/web-api/get-list-featured-playlists/)
   * @param params The `ApiService.GetBrowseFeaturedPlaylistsParams` containing the following parameters:
   *
   * - `timestamp`: A timestamp in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss) with the user's local time to get results tailored to a specific date and time in the day. If not provided, it defaults to the current UTC time. Example: "2014-10-23T09:00:00" for a user whose local time is 9AM.
   *
   * - `offset`: The index of the first item to return
   *
   * - `locale`: The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)".
   *
   * - `limit`: The maximum number of items to return
   *
   * - `country`: The country (an ISO 3166-1 alpha-2 country code)
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  getBrowseFeaturedPlaylistsResponse(params: ApiService.GetBrowseFeaturedPlaylistsParams): __Observable<__StrictHttpResponse<FeaturedPlaylists>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.timestamp != null) __params = __params.set('timestamp', params.timestamp.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.country != null) __params = __params.set('country', params.country.toString());
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/browse/featured-playlists`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FeaturedPlaylists>;
      })
    );
  }
  /**
   * [Get a List of Featured Playlists](https://developer.spotify.com/web-api/get-list-featured-playlists/)
   * @param params The `ApiService.GetBrowseFeaturedPlaylistsParams` containing the following parameters:
   *
   * - `timestamp`: A timestamp in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss) with the user's local time to get results tailored to a specific date and time in the day. If not provided, it defaults to the current UTC time. Example: "2014-10-23T09:00:00" for a user whose local time is 9AM.
   *
   * - `offset`: The index of the first item to return
   *
   * - `locale`: The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)".
   *
   * - `limit`: The maximum number of items to return
   *
   * - `country`: The country (an ISO 3166-1 alpha-2 country code)
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  getBrowseFeaturedPlaylists(params: ApiService.GetBrowseFeaturedPlaylistsParams): __Observable<FeaturedPlaylists> {
    return this.getBrowseFeaturedPlaylistsResponse(params).pipe(
      __map(_r => _r.body as FeaturedPlaylists)
    );
  }

  /**
   * [Get a List of New Releases](https://developer.spotify.com/web-api/get-list-new-releases/)
   * @param params The `ApiService.GetBrowseNewReleasesParams` containing the following parameters:
   *
   * - `offset`: The index of the first item to return
   *
   * - `limit`: The maximum number of items to return
   *
   * - `country`: The country (an ISO 3166-1 alpha-2 country code)
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  getBrowseNewReleasesResponse(params: ApiService.GetBrowseNewReleasesParams): __Observable<__StrictHttpResponse<AlbumSimplePage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.country != null) __params = __params.set('country', params.country.toString());
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/browse/new-releases`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AlbumSimplePage>;
      })
    );
  }
  /**
   * [Get a List of New Releases](https://developer.spotify.com/web-api/get-list-new-releases/)
   * @param params The `ApiService.GetBrowseNewReleasesParams` containing the following parameters:
   *
   * - `offset`: The index of the first item to return
   *
   * - `limit`: The maximum number of items to return
   *
   * - `country`: The country (an ISO 3166-1 alpha-2 country code)
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  getBrowseNewReleases(params: ApiService.GetBrowseNewReleasesParams): __Observable<AlbumSimplePage> {
    return this.getBrowseNewReleasesResponse(params).pipe(
      __map(_r => _r.body as AlbumSimplePage)
    );
  }

  /**
   * [Get Current User's Profile](https://developer.spotify.com/web-api/get-current-users-profile/)
   * @return OK
   */
  getMeResponse(): __Observable<__StrictHttpResponse<CurrentUserProfile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/me`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CurrentUserProfile>;
      })
    );
  }
  /**
   * [Get Current User's Profile](https://developer.spotify.com/web-api/get-current-users-profile/)
   * @return OK
   */
  getMe(): __Observable<CurrentUserProfile> {
    return this.getMeResponse().pipe(
      __map(_r => _r.body as CurrentUserProfile)
    );
  }

  /**
   * [Unfollow Artists or Users](https://developer.spotify.com/web-api/unfollow-artists-users/)
   * @param params The `ApiService.DeleteMeFollowingParams` containing the following parameters:
   *
   * - `type`: The type to unfollow.
   *
   * - `ids`: A comma-separated list of the artists or users ids
   */
  deleteMeFollowingResponse(params: ApiService.DeleteMeFollowingParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.type != null) __params = __params.set('type', params.type.toString());
    if (params.ids != null) __params = __params.set('ids', params.ids.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/me/following`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * [Unfollow Artists or Users](https://developer.spotify.com/web-api/unfollow-artists-users/)
   * @param params The `ApiService.DeleteMeFollowingParams` containing the following parameters:
   *
   * - `type`: The type to unfollow.
   *
   * - `ids`: A comma-separated list of the artists or users ids
   */
  deleteMeFollowing(params: ApiService.DeleteMeFollowingParams): __Observable<null> {
    return this.deleteMeFollowingResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * [Get User's Followed Artists](https://developer.spotify.com/web-api/get-followed-artists/)
   * @param params The `ApiService.GetMeFollowingParams` containing the following parameters:
   *
   * - `type`: The ID type, currently only artist is supported.
   *
   * - `limit`: The maximum number of items to return
   *
   * - `after`: The last artist ID retrieved from the previous request.
   *
   * @return OK
   */
  getMeFollowingResponse(params: ApiService.GetMeFollowingParams): __Observable<__StrictHttpResponse<UserFollowed>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.type != null) __params = __params.set('type', params.type.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.after != null) __params = __params.set('after', params.after.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/me/following`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserFollowed>;
      })
    );
  }
  /**
   * [Get User's Followed Artists](https://developer.spotify.com/web-api/get-followed-artists/)
   * @param params The `ApiService.GetMeFollowingParams` containing the following parameters:
   *
   * - `type`: The ID type, currently only artist is supported.
   *
   * - `limit`: The maximum number of items to return
   *
   * - `after`: The last artist ID retrieved from the previous request.
   *
   * @return OK
   */
  getMeFollowing(params: ApiService.GetMeFollowingParams): __Observable<UserFollowed> {
    return this.getMeFollowingResponse(params).pipe(
      __map(_r => _r.body as UserFollowed)
    );
  }

  /**
   * [Follow Artists or Users](https://developer.spotify.com/web-api/follow-artists-users/)
   * @param params The `ApiService.PutMeFollowingParams` containing the following parameters:
   *
   * - `type`: The type to follow.
   *
   * - `ids`: A comma-separated list of the artists or users ids
   */
  putMeFollowingResponse(params: ApiService.PutMeFollowingParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.type != null) __params = __params.set('type', params.type.toString());
    if (params.ids != null) __params = __params.set('ids', params.ids.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/me/following`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * [Follow Artists or Users](https://developer.spotify.com/web-api/follow-artists-users/)
   * @param params The `ApiService.PutMeFollowingParams` containing the following parameters:
   *
   * - `type`: The type to follow.
   *
   * - `ids`: A comma-separated list of the artists or users ids
   */
  putMeFollowing(params: ApiService.PutMeFollowingParams): __Observable<null> {
    return this.putMeFollowingResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * [Check if Current User Follows Artists or Users](https://developer.spotify.com/web-api/check-current-user-follows/)
   * @param params The `ApiService.GetMeFollowingContainsParams` containing the following parameters:
   *
   * - `type`: The type to follow.
   *
   * - `ids`: A comma-separated string of the artists or users ids.
   *
   * @return OK
   */
  getMeFollowingContainsResponse(params: ApiService.GetMeFollowingContainsParams): __Observable<__StrictHttpResponse<Array<boolean>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.type != null) __params = __params.set('type', params.type.toString());
    if (params.ids != null) __params = __params.set('ids', params.ids.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/me/following/contains`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<boolean>>;
      })
    );
  }
  /**
   * [Check if Current User Follows Artists or Users](https://developer.spotify.com/web-api/check-current-user-follows/)
   * @param params The `ApiService.GetMeFollowingContainsParams` containing the following parameters:
   *
   * - `type`: The type to follow.
   *
   * - `ids`: A comma-separated string of the artists or users ids.
   *
   * @return OK
   */
  getMeFollowingContains(params: ApiService.GetMeFollowingContainsParams): __Observable<Array<boolean>> {
    return this.getMeFollowingContainsResponse(params).pipe(
      __map(_r => _r.body as Array<boolean>)
    );
  }

  /**
   * [Remove Tracks for Current User](https://developer.spotify.com/web-api/remove-tracks-user/)
   * @param params The `ApiService.DeleteMeTracksParams` containing the following parameters:
   *
   * - `ids`: A comma-separated list of IDs
   *
   * - `Accept`: It is used to set specified media type.
   */
  deleteMeTracksResponse(params: ApiService.DeleteMeTracksParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.ids != null) __params = __params.set('ids', params.ids.toString());
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/me/tracks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * [Remove Tracks for Current User](https://developer.spotify.com/web-api/remove-tracks-user/)
   * @param params The `ApiService.DeleteMeTracksParams` containing the following parameters:
   *
   * - `ids`: A comma-separated list of IDs
   *
   * - `Accept`: It is used to set specified media type.
   */
  deleteMeTracks(params: ApiService.DeleteMeTracksParams): __Observable<null> {
    return this.deleteMeTracksResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * [Get Current User's Saved Tracks](https://developer.spotify.com/web-api/get-users-saved-tracks/)
   * @param params The `ApiService.GetMeTracksParams` containing the following parameters:
   *
   * - `offset`: The index of the first item to return
   *
   * - `market`: The market (an ISO 3166-1 alpha-2 country code)
   *
   * - `limit`: The maximum number of items to return
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  getMeTracksResponse(params: ApiService.GetMeTracksParams): __Observable<__StrictHttpResponse<SavedTrackPage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.market != null) __params = __params.set('market', params.market.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/me/tracks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SavedTrackPage>;
      })
    );
  }
  /**
   * [Get Current User's Saved Tracks](https://developer.spotify.com/web-api/get-users-saved-tracks/)
   * @param params The `ApiService.GetMeTracksParams` containing the following parameters:
   *
   * - `offset`: The index of the first item to return
   *
   * - `market`: The market (an ISO 3166-1 alpha-2 country code)
   *
   * - `limit`: The maximum number of items to return
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  getMeTracks(params: ApiService.GetMeTracksParams): __Observable<SavedTrackPage> {
    return this.getMeTracksResponse(params).pipe(
      __map(_r => _r.body as SavedTrackPage)
    );
  }

  /**
   * [Save Tracks for Current User](https://developer.spotify.com/web-api/save-tracks-user/)
   * @param params The `ApiService.PutMeTracksParams` containing the following parameters:
   *
   * - `ids`: A comma-separated list of IDs
   *
   * - `Accept`: It is used to set specified media type.
   */
  putMeTracksResponse(params: ApiService.PutMeTracksParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.ids != null) __params = __params.set('ids', params.ids.toString());
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/me/tracks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * [Save Tracks for Current User](https://developer.spotify.com/web-api/save-tracks-user/)
   * @param params The `ApiService.PutMeTracksParams` containing the following parameters:
   *
   * - `ids`: A comma-separated list of IDs
   *
   * - `Accept`: It is used to set specified media type.
   */
  putMeTracks(params: ApiService.PutMeTracksParams): __Observable<null> {
    return this.putMeTracksResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * [Check Current User's Saved Tracks](https://developer.spotify.com/web-api/check-users-saved-tracks/)
   * @param ids A comma-separated list of IDs
   * @return OK
   */
  getMeTracksContainsResponse(ids: string): __Observable<__StrictHttpResponse<Array<boolean>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (ids != null) __params = __params.set('ids', ids.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/me/tracks/contains`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<boolean>>;
      })
    );
  }
  /**
   * [Check Current User's Saved Tracks](https://developer.spotify.com/web-api/check-users-saved-tracks/)
   * @param ids A comma-separated list of IDs
   * @return OK
   */
  getMeTracksContains(ids: string): __Observable<Array<boolean>> {
    return this.getMeTracksContainsResponse(ids).pipe(
      __map(_r => _r.body as Array<boolean>)
    );
  }

  /**
   * [Search for an Item](https://developer.spotify.com/web-api/search-item/)
   * @param params The `ApiService.GetSearchParams` containing the following parameters:
   *
   * - `type`: A comma-separated list of item types to search across. Search results will include hits from all the specified item types; for example q=name:abacab&type=album,track will return both albums and tracks with "abacab" in their name.
   *
   * - `q`: The search query's keywords (and optional field filters). The search is not case-sensitive: 'roadhouse' will match 'Roadhouse', 'roadHouse', etc. Keywords will be matched in any order unless surrounded by quotes, thus q=roadhouse&20blues will match both 'Blues Roadhouse' and 'Roadhouse of the Blues'. Quotation marks can be used to limit the match to a phrase: q=roadhouse&20blues will match 'My Roadhouse Blues' but not 'Roadhouse of the Blues'. By default, results are returned when a match is found in any field of the target object type. Searches can be made more specific by specifying an album, artist or track field filter. For example q=album:gold%20artist:abba&type=album will search for albums with the text 'gold' in the album name and the text 'abba' in an artist name. Other possible field filters, depending on object types being searched, include year, genre, upc, and isrc. For example, q=damian%20genre:reggae-pop&type=artist. The asterisk (*) character can, with some limitations, be used as a wildcard (maximum: 2 per query). It will match a variable number of non-white-space characters. It cannot be used in a quoted phrase, in a field filter, or as the first character of the keyword string. Searching for playlists will return results matching the playlist's name and/or description.
   *
   * - `offset`: The index of the first item to return
   *
   * - `market`: The market (an ISO 3166-1 alpha-2 country code).  If given, only items with content playable in that market will be returned.
   *
   * - `limit`: The maximum number of items to return
   *
   * @return OK
   */
  getSearchResponse(params: ApiService.GetSearchParams): __Observable<__StrictHttpResponse<Search>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.type != null) __params = __params.set('type', params.type.toString());
    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.market != null) __params = __params.set('market', params.market.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/search`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Search>;
      })
    );
  }
  /**
   * [Search for an Item](https://developer.spotify.com/web-api/search-item/)
   * @param params The `ApiService.GetSearchParams` containing the following parameters:
   *
   * - `type`: A comma-separated list of item types to search across. Search results will include hits from all the specified item types; for example q=name:abacab&type=album,track will return both albums and tracks with "abacab" in their name.
   *
   * - `q`: The search query's keywords (and optional field filters). The search is not case-sensitive: 'roadhouse' will match 'Roadhouse', 'roadHouse', etc. Keywords will be matched in any order unless surrounded by quotes, thus q=roadhouse&20blues will match both 'Blues Roadhouse' and 'Roadhouse of the Blues'. Quotation marks can be used to limit the match to a phrase: q=roadhouse&20blues will match 'My Roadhouse Blues' but not 'Roadhouse of the Blues'. By default, results are returned when a match is found in any field of the target object type. Searches can be made more specific by specifying an album, artist or track field filter. For example q=album:gold%20artist:abba&type=album will search for albums with the text 'gold' in the album name and the text 'abba' in an artist name. Other possible field filters, depending on object types being searched, include year, genre, upc, and isrc. For example, q=damian%20genre:reggae-pop&type=artist. The asterisk (*) character can, with some limitations, be used as a wildcard (maximum: 2 per query). It will match a variable number of non-white-space characters. It cannot be used in a quoted phrase, in a field filter, or as the first character of the keyword string. Searching for playlists will return results matching the playlist's name and/or description.
   *
   * - `offset`: The index of the first item to return
   *
   * - `market`: The market (an ISO 3166-1 alpha-2 country code).  If given, only items with content playable in that market will be returned.
   *
   * - `limit`: The maximum number of items to return
   *
   * @return OK
   */
  getSearch(params: ApiService.GetSearchParams): __Observable<Search> {
    return this.getSearchResponse(params).pipe(
      __map(_r => _r.body as Search)
    );
  }

  /**
   * [Get Several Tracks](https://developer.spotify.com/web-api/get-several-tracks/)
   * @param params The `ApiService.GetTracksParams` containing the following parameters:
   *
   * - `ids`: A comma-separated list of IDs
   *
   * - `market`: The market (an ISO 3166-1 alpha-2 country code)
   *
   * @return OK
   */
  getTracksResponse(params: ApiService.GetTracksParams): __Observable<__StrictHttpResponse<{tracks?: Array<Track>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.ids != null) __params = __params.set('ids', params.ids.toString());
    if (params.market != null) __params = __params.set('market', params.market.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/tracks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{tracks?: Array<Track>}>;
      })
    );
  }
  /**
   * [Get Several Tracks](https://developer.spotify.com/web-api/get-several-tracks/)
   * @param params The `ApiService.GetTracksParams` containing the following parameters:
   *
   * - `ids`: A comma-separated list of IDs
   *
   * - `market`: The market (an ISO 3166-1 alpha-2 country code)
   *
   * @return OK
   */
  getTracks(params: ApiService.GetTracksParams): __Observable<{tracks?: Array<Track>}> {
    return this.getTracksResponse(params).pipe(
      __map(_r => _r.body as {tracks?: Array<Track>})
    );
  }

  /**
   * [Get a Track](https://developer.spotify.com/web-api/get-track/)
   * @param params The `ApiService.GetTracksIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `market`: The market (an ISO 3166-1 alpha-2 country code)
   *
   * @return OK
   */
  getTracksIdResponse(params: ApiService.GetTracksIdParams): __Observable<__StrictHttpResponse<Track>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.market != null) __params = __params.set('market', params.market.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/tracks/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Track>;
      })
    );
  }
  /**
   * [Get a Track](https://developer.spotify.com/web-api/get-track/)
   * @param params The `ApiService.GetTracksIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `market`: The market (an ISO 3166-1 alpha-2 country code)
   *
   * @return OK
   */
  getTracksId(params: ApiService.GetTracksIdParams): __Observable<Track> {
    return this.getTracksIdResponse(params).pipe(
      __map(_r => _r.body as Track)
    );
  }

  /**
   * [Get a User's Profile](https://developer.spotify.com/web-api/get-users-profile/)
   * @param user_id The user's Spotify user ID.
   * @return OK
   */
  getUsersUserIdResponse(userId: string): __Observable<__StrictHttpResponse<UserProfile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users/${userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserProfile>;
      })
    );
  }
  /**
   * [Get a User's Profile](https://developer.spotify.com/web-api/get-users-profile/)
   * @param user_id The user's Spotify user ID.
   * @return OK
   */
  getUsersUserId(userId: string): __Observable<UserProfile> {
    return this.getUsersUserIdResponse(userId).pipe(
      __map(_r => _r.body as UserProfile)
    );
  }

  /**
   * [Get a List of a User's Playlists](https://developer.spotify.com/web-api/get-list-users-playlists/)
   * @param params The `ApiService.GetUsersUserIdPlaylistsParams` containing the following parameters:
   *
   * - `user_id`: The user's Spotify user ID.
   *
   * - `offset`: The index of the first item to return
   *
   * - `limit`: The maximum number of items to return
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  getUsersUserIdPlaylistsResponse(params: ApiService.GetUsersUserIdPlaylistsParams): __Observable<__StrictHttpResponse<PlaylistSimplePage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users/${params.userId}/playlists`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PlaylistSimplePage>;
      })
    );
  }
  /**
   * [Get a List of a User's Playlists](https://developer.spotify.com/web-api/get-list-users-playlists/)
   * @param params The `ApiService.GetUsersUserIdPlaylistsParams` containing the following parameters:
   *
   * - `user_id`: The user's Spotify user ID.
   *
   * - `offset`: The index of the first item to return
   *
   * - `limit`: The maximum number of items to return
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  getUsersUserIdPlaylists(params: ApiService.GetUsersUserIdPlaylistsParams): __Observable<PlaylistSimplePage> {
    return this.getUsersUserIdPlaylistsResponse(params).pipe(
      __map(_r => _r.body as PlaylistSimplePage)
    );
  }

  /**
   * [Create a Playlist](https://developer.spotify.com/web-api/create-playlist/)
   * @param params The `ApiService.PostUsersUserIdPlaylistsParams` containing the following parameters:
   *
   * - `user_id`: The user's Spotify user ID.
   *
   * - `body`:
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return Created
   */
  postUsersUserIdPlaylistsResponse(params: ApiService.PostUsersUserIdPlaylistsParams): __Observable<__StrictHttpResponse<Playlist>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/users/${params.userId}/playlists`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Playlist>;
      })
    );
  }
  /**
   * [Create a Playlist](https://developer.spotify.com/web-api/create-playlist/)
   * @param params The `ApiService.PostUsersUserIdPlaylistsParams` containing the following parameters:
   *
   * - `user_id`: The user's Spotify user ID.
   *
   * - `body`:
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return Created
   */
  postUsersUserIdPlaylists(params: ApiService.PostUsersUserIdPlaylistsParams): __Observable<Playlist> {
    return this.postUsersUserIdPlaylistsResponse(params).pipe(
      __map(_r => _r.body as Playlist)
    );
  }

  /**
   * [Get a Playlist](https://developer.spotify.com/web-api/get-playlist/)
   * @param params The `ApiService.GetUsersUserIdPlaylistsPlaylistIdParams` containing the following parameters:
   *
   * - `user_id`: The user's Spotify user ID.
   *
   * - `playlist_id`: The Spotify playlist ID.
   *
   * - `market`: The market (an ISO 3166-1 alpha-2 country code)
   *
   * - `fields`: A comma-separated list of fields to filter query
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  getUsersUserIdPlaylistsPlaylistIdResponse(params: ApiService.GetUsersUserIdPlaylistsPlaylistIdParams): __Observable<__StrictHttpResponse<Playlist>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.market != null) __params = __params.set('market', params.market.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users/${params.userId}/playlists/${params.playlistId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Playlist>;
      })
    );
  }
  /**
   * [Get a Playlist](https://developer.spotify.com/web-api/get-playlist/)
   * @param params The `ApiService.GetUsersUserIdPlaylistsPlaylistIdParams` containing the following parameters:
   *
   * - `user_id`: The user's Spotify user ID.
   *
   * - `playlist_id`: The Spotify playlist ID.
   *
   * - `market`: The market (an ISO 3166-1 alpha-2 country code)
   *
   * - `fields`: A comma-separated list of fields to filter query
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  getUsersUserIdPlaylistsPlaylistId(params: ApiService.GetUsersUserIdPlaylistsPlaylistIdParams): __Observable<Playlist> {
    return this.getUsersUserIdPlaylistsPlaylistIdResponse(params).pipe(
      __map(_r => _r.body as Playlist)
    );
  }

  /**
   * [Change a Playlist's Details](https://developer.spotify.com/web-api/change-playlist-details/)
   * @param params The `ApiService.PutUsersUserIdPlaylistsPlaylistIdParams` containing the following parameters:
   *
   * - `user_id`: The user's Spotify user ID.
   *
   * - `playlist_id`: The Spotify playlist ID.
   *
   * - `body`:
   *
   * - `Accept`: It is used to set specified media type.
   */
  putUsersUserIdPlaylistsPlaylistIdResponse(params: ApiService.PutUsersUserIdPlaylistsPlaylistIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.body;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/users/${params.userId}/playlists/${params.playlistId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * [Change a Playlist's Details](https://developer.spotify.com/web-api/change-playlist-details/)
   * @param params The `ApiService.PutUsersUserIdPlaylistsPlaylistIdParams` containing the following parameters:
   *
   * - `user_id`: The user's Spotify user ID.
   *
   * - `playlist_id`: The Spotify playlist ID.
   *
   * - `body`:
   *
   * - `Accept`: It is used to set specified media type.
   */
  putUsersUserIdPlaylistsPlaylistId(params: ApiService.PutUsersUserIdPlaylistsPlaylistIdParams): __Observable<null> {
    return this.putUsersUserIdPlaylistsPlaylistIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * [Unfollow a Playlist](https://developer.spotify.com/web-api/unfollow-playlist/)
   * @param params The `ApiService.DeleteUsersUserIdPlaylistsPlaylistIdFollowersParams` containing the following parameters:
   *
   * - `user_id`: The user's Spotify user ID.
   *
   * - `playlist_id`: The Spotify playlist ID.
   */
  deleteUsersUserIdPlaylistsPlaylistIdFollowersResponse(params: ApiService.DeleteUsersUserIdPlaylistsPlaylistIdFollowersParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/users/${params.userId}/playlists/${params.playlistId}/followers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * [Unfollow a Playlist](https://developer.spotify.com/web-api/unfollow-playlist/)
   * @param params The `ApiService.DeleteUsersUserIdPlaylistsPlaylistIdFollowersParams` containing the following parameters:
   *
   * - `user_id`: The user's Spotify user ID.
   *
   * - `playlist_id`: The Spotify playlist ID.
   */
  deleteUsersUserIdPlaylistsPlaylistIdFollowers(params: ApiService.DeleteUsersUserIdPlaylistsPlaylistIdFollowersParams): __Observable<null> {
    return this.deleteUsersUserIdPlaylistsPlaylistIdFollowersResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * [Follow a Playlist](https://developer.spotify.com/web-api/follow-playlist/)
   * @param params The `ApiService.PutUsersUserIdPlaylistsPlaylistIdFollowersParams` containing the following parameters:
   *
   * - `user_id`: The user's Spotify user ID.
   *
   * - `playlist_id`: The Spotify playlist ID.
   *
   * - `body`:
   */
  putUsersUserIdPlaylistsPlaylistIdFollowersResponse(params: ApiService.PutUsersUserIdPlaylistsPlaylistIdFollowersParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/users/${params.userId}/playlists/${params.playlistId}/followers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * [Follow a Playlist](https://developer.spotify.com/web-api/follow-playlist/)
   * @param params The `ApiService.PutUsersUserIdPlaylistsPlaylistIdFollowersParams` containing the following parameters:
   *
   * - `user_id`: The user's Spotify user ID.
   *
   * - `playlist_id`: The Spotify playlist ID.
   *
   * - `body`:
   */
  putUsersUserIdPlaylistsPlaylistIdFollowers(params: ApiService.PutUsersUserIdPlaylistsPlaylistIdFollowersParams): __Observable<null> {
    return this.putUsersUserIdPlaylistsPlaylistIdFollowersResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * [Check if Users Follow a Playlist](https://developer.spotify.com/web-api/check-user-following-playlist/)
   * @param params The `ApiService.GetUsersUserIdPlaylistsPlaylistIdFollowersContainsParams` containing the following parameters:
   *
   * - `user_id`: The user's Spotify user ID.
   *
   * - `playlist_id`: The Spotify playlist ID.
   *
   * - `ids`: A comma-separated list of users ids
   *
   * @return OK
   */
  getUsersUserIdPlaylistsPlaylistIdFollowersContainsResponse(params: ApiService.GetUsersUserIdPlaylistsPlaylistIdFollowersContainsParams): __Observable<__StrictHttpResponse<Array<boolean>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.ids != null) __params = __params.set('ids', params.ids.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users/${params.userId}/playlists/${params.playlistId}/followers/contains`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<boolean>>;
      })
    );
  }
  /**
   * [Check if Users Follow a Playlist](https://developer.spotify.com/web-api/check-user-following-playlist/)
   * @param params The `ApiService.GetUsersUserIdPlaylistsPlaylistIdFollowersContainsParams` containing the following parameters:
   *
   * - `user_id`: The user's Spotify user ID.
   *
   * - `playlist_id`: The Spotify playlist ID.
   *
   * - `ids`: A comma-separated list of users ids
   *
   * @return OK
   */
  getUsersUserIdPlaylistsPlaylistIdFollowersContains(params: ApiService.GetUsersUserIdPlaylistsPlaylistIdFollowersContainsParams): __Observable<Array<boolean>> {
    return this.getUsersUserIdPlaylistsPlaylistIdFollowersContainsResponse(params).pipe(
      __map(_r => _r.body as Array<boolean>)
    );
  }

  /**
   * [Remove Tracks from a Playlist](https://developer.spotify.com/web-api/remove-tracks-playlist/)
   * @param params The `ApiService.DeleteUsersUserIdPlaylistsPlaylistIdTracksParams` containing the following parameters:
   *
   * - `user_id`: The user's Spotify user ID.
   *
   * - `playlist_id`: The Spotify playlist ID.
   *
   * - `body`:
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  deleteUsersUserIdPlaylistsPlaylistIdTracksResponse(params: ApiService.DeleteUsersUserIdPlaylistsPlaylistIdTracksParams): __Observable<__StrictHttpResponse<PlaylistSnapshot>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.body;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/users/${params.userId}/playlists/${params.playlistId}/tracks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PlaylistSnapshot>;
      })
    );
  }
  /**
   * [Remove Tracks from a Playlist](https://developer.spotify.com/web-api/remove-tracks-playlist/)
   * @param params The `ApiService.DeleteUsersUserIdPlaylistsPlaylistIdTracksParams` containing the following parameters:
   *
   * - `user_id`: The user's Spotify user ID.
   *
   * - `playlist_id`: The Spotify playlist ID.
   *
   * - `body`:
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  deleteUsersUserIdPlaylistsPlaylistIdTracks(params: ApiService.DeleteUsersUserIdPlaylistsPlaylistIdTracksParams): __Observable<PlaylistSnapshot> {
    return this.deleteUsersUserIdPlaylistsPlaylistIdTracksResponse(params).pipe(
      __map(_r => _r.body as PlaylistSnapshot)
    );
  }

  /**
   * [Get a Playlist's Tracks](https://developer.spotify.com/web-api/get-playlists-tracks/)
   * @param params The `ApiService.GetUsersUserIdPlaylistsPlaylistIdTracksParams` containing the following parameters:
   *
   * - `user_id`: The user's Spotify user ID.
   *
   * - `playlist_id`: The Spotify playlist ID.
   *
   * - `offset`: The index of the first item to return
   *
   * - `market`: The market (an ISO 3166-1 alpha-2 country code)
   *
   * - `limit`: The maximum number of items to return
   *
   * - `fields`: A comma-separated list of fields to filter query
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  getUsersUserIdPlaylistsPlaylistIdTracksResponse(params: ApiService.GetUsersUserIdPlaylistsPlaylistIdTracksParams): __Observable<__StrictHttpResponse<PlaylistTrackPage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.market != null) __params = __params.set('market', params.market.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users/${params.userId}/playlists/${params.playlistId}/tracks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PlaylistTrackPage>;
      })
    );
  }
  /**
   * [Get a Playlist's Tracks](https://developer.spotify.com/web-api/get-playlists-tracks/)
   * @param params The `ApiService.GetUsersUserIdPlaylistsPlaylistIdTracksParams` containing the following parameters:
   *
   * - `user_id`: The user's Spotify user ID.
   *
   * - `playlist_id`: The Spotify playlist ID.
   *
   * - `offset`: The index of the first item to return
   *
   * - `market`: The market (an ISO 3166-1 alpha-2 country code)
   *
   * - `limit`: The maximum number of items to return
   *
   * - `fields`: A comma-separated list of fields to filter query
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  getUsersUserIdPlaylistsPlaylistIdTracks(params: ApiService.GetUsersUserIdPlaylistsPlaylistIdTracksParams): __Observable<PlaylistTrackPage> {
    return this.getUsersUserIdPlaylistsPlaylistIdTracksResponse(params).pipe(
      __map(_r => _r.body as PlaylistTrackPage)
    );
  }

  /**
   * [Add Tracks to a Playlist](https://developer.spotify.com/web-api/add-tracks-to-playlist/)
   * @param params The `ApiService.PostUsersUserIdPlaylistsPlaylistIdTracksParams` containing the following parameters:
   *
   * - `user_id`: The user's Spotify user ID.
   *
   * - `uris`: A comma-separated list of Spotify track URIs to add. A maximum of 100 tracks can be added in one request.
   *
   * - `playlist_id`: The Spotify playlist ID.
   *
   * - `position`: The position to insert the tracks, a zero-based index
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  postUsersUserIdPlaylistsPlaylistIdTracksResponse(params: ApiService.PostUsersUserIdPlaylistsPlaylistIdTracksParams): __Observable<__StrictHttpResponse<PlaylistSnapshot>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.uris != null) __params = __params.set('uris', params.uris.toString());

    if (params.position != null) __params = __params.set('position', params.position.toString());
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/users/${params.userId}/playlists/${params.playlistId}/tracks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PlaylistSnapshot>;
      })
    );
  }
  /**
   * [Add Tracks to a Playlist](https://developer.spotify.com/web-api/add-tracks-to-playlist/)
   * @param params The `ApiService.PostUsersUserIdPlaylistsPlaylistIdTracksParams` containing the following parameters:
   *
   * - `user_id`: The user's Spotify user ID.
   *
   * - `uris`: A comma-separated list of Spotify track URIs to add. A maximum of 100 tracks can be added in one request.
   *
   * - `playlist_id`: The Spotify playlist ID.
   *
   * - `position`: The position to insert the tracks, a zero-based index
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  postUsersUserIdPlaylistsPlaylistIdTracks(params: ApiService.PostUsersUserIdPlaylistsPlaylistIdTracksParams): __Observable<PlaylistSnapshot> {
    return this.postUsersUserIdPlaylistsPlaylistIdTracksResponse(params).pipe(
      __map(_r => _r.body as PlaylistSnapshot)
    );
  }

  /**
   * [Reorder or replace a Playlist's Tracks](https://developer.spotify.com/web-api/reorder-playlists-tracks/)
   * @param params The `ApiService.PutUsersUserIdPlaylistsPlaylistIdTracksParams` containing the following parameters:
   *
   * - `user_id`: The user's Spotify user ID.
   *
   * - `playlist_id`: The Spotify playlist ID.
   *
   * - `body`:
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  putUsersUserIdPlaylistsPlaylistIdTracksResponse(params: ApiService.PutUsersUserIdPlaylistsPlaylistIdTracksParams): __Observable<__StrictHttpResponse<PlaylistSnapshot>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.body;
    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/users/${params.userId}/playlists/${params.playlistId}/tracks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PlaylistSnapshot>;
      })
    );
  }
  /**
   * [Reorder or replace a Playlist's Tracks](https://developer.spotify.com/web-api/reorder-playlists-tracks/)
   * @param params The `ApiService.PutUsersUserIdPlaylistsPlaylistIdTracksParams` containing the following parameters:
   *
   * - `user_id`: The user's Spotify user ID.
   *
   * - `playlist_id`: The Spotify playlist ID.
   *
   * - `body`:
   *
   * - `Accept`: It is used to set specified media type.
   *
   * @return OK
   */
  putUsersUserIdPlaylistsPlaylistIdTracks(params: ApiService.PutUsersUserIdPlaylistsPlaylistIdTracksParams): __Observable<PlaylistSnapshot> {
    return this.putUsersUserIdPlaylistsPlaylistIdTracksResponse(params).pipe(
      __map(_r => _r.body as PlaylistSnapshot)
    );
  }
}

module ApiService {

  /**
   * Parameters for getAlbums
   */
  export interface GetAlbumsParams {

    /**
     * A comma-separated list of IDs
     */
    ids: string;

    /**
     * The market (an ISO 3166-1 alpha-2 country code)
     */
    market?: string;
  }

  /**
   * Parameters for getAlbumsId
   */
  export interface GetAlbumsIdParams {

    /**
     * The Spotify ID for the album
     */
    id: string;

    /**
     * The market (an ISO 3166-1 alpha-2 country code)
     */
    market?: string;
  }

  /**
   * Parameters for getAlbumsIdTracks
   */
  export interface GetAlbumsIdTracksParams {

    /**
     * The Spotify ID for the album
     */
    id: string;

    /**
     * The index of the first item to return
     */
    offset?: number;

    /**
     * The market (an ISO 3166-1 alpha-2 country code)
     */
    market?: string;

    /**
     * The maximum number of items to return
     */
    limit?: number;
  }

  /**
   * Parameters for getArtistsIdAlbums
   */
  export interface GetArtistsIdAlbumsParams {

    /**
     * The Spotify ID for the artist
     */
    id: string;

    /**
     * The index of the first item to return
     */
    offset?: number;

    /**
     * The market (an ISO 3166-1 alpha-2 country code)
     */
    market?: string;

    /**
     * The maximum number of items to return
     */
    limit?: number;

    /**
     * Filter by album types
     */
    albumType?: string;
  }

  /**
   * Parameters for getArtistsIdTopTracks
   */
  export interface GetArtistsIdTopTracksParams {

    /**
     * The Spotify ID for the artist
     */
    id: string;

    /**
     * The country (an ISO 3166-1 alpha-2 country code)
     */
    country: string;
  }

  /**
   * Parameters for getBrowseCategories
   */
  export interface GetBrowseCategoriesParams {

    /**
     * The index of the first item to return
     */
    offset?: number;

    /**
     * The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)".
     */
    locale?: string;

    /**
     * The maximum number of items to return
     */
    limit?: number;

    /**
     * The country (an ISO 3166-1 alpha-2 country code)
     */
    country?: string;

    /**
     * It is used to set specified media type.
     */
    Accept?: string;
  }

  /**
   * Parameters for getBrowseCategoriesCategoryId
   */
  export interface GetBrowseCategoriesCategoryIdParams {

    /**
     * The Spotify ID of the category you wish to fetch.
     */
    categoryId: string;

    /**
     * The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)".
     */
    locale?: string;

    /**
     * The country (an ISO 3166-1 alpha-2 country code)
     */
    country?: string;

    /**
     * It is used to set specified media type.
     */
    Accept?: string;
  }

  /**
   * Parameters for getBrowseCategoriesCategoryIdPlaylists
   */
  export interface GetBrowseCategoriesCategoryIdPlaylistsParams {

    /**
     * The Spotify ID of the category you wish to fetch.
     */
    categoryId: string;

    /**
     * The index of the first item to return
     */
    offset?: number;

    /**
     * The maximum number of items to return
     */
    limit?: number;

    /**
     * The country (an ISO 3166-1 alpha-2 country code)
     */
    country?: string;

    /**
     * It is used to set specified media type.
     */
    Accept?: string;
  }

  /**
   * Parameters for getBrowseFeaturedPlaylists
   */
  export interface GetBrowseFeaturedPlaylistsParams {

    /**
     * A timestamp in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss) with the user's local time to get results tailored to a specific date and time in the day. If not provided, it defaults to the current UTC time. Example: "2014-10-23T09:00:00" for a user whose local time is 9AM.
     */
    timestamp?: string;

    /**
     * The index of the first item to return
     */
    offset?: number;

    /**
     * The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)".
     */
    locale?: string;

    /**
     * The maximum number of items to return
     */
    limit?: number;

    /**
     * The country (an ISO 3166-1 alpha-2 country code)
     */
    country?: string;

    /**
     * It is used to set specified media type.
     */
    Accept?: string;
  }

  /**
   * Parameters for getBrowseNewReleases
   */
  export interface GetBrowseNewReleasesParams {

    /**
     * The index of the first item to return
     */
    offset?: number;

    /**
     * The maximum number of items to return
     */
    limit?: number;

    /**
     * The country (an ISO 3166-1 alpha-2 country code)
     */
    country?: string;

    /**
     * It is used to set specified media type.
     */
    Accept?: string;
  }

  /**
   * Parameters for deleteMeFollowing
   */
  export interface DeleteMeFollowingParams {

    /**
     * The type to unfollow.
     */
    type: 'artist' | 'user';

    /**
     * A comma-separated list of the artists or users ids
     */
    ids: string;
  }

  /**
   * Parameters for getMeFollowing
   */
  export interface GetMeFollowingParams {

    /**
     * The ID type, currently only artist is supported.
     */
    type: 'artist';

    /**
     * The maximum number of items to return
     */
    limit?: number;

    /**
     * The last artist ID retrieved from the previous request.
     */
    after?: string;
  }

  /**
   * Parameters for putMeFollowing
   */
  export interface PutMeFollowingParams {

    /**
     * The type to follow.
     */
    type: 'artist' | 'user';

    /**
     * A comma-separated list of the artists or users ids
     */
    ids: string;
  }

  /**
   * Parameters for getMeFollowingContains
   */
  export interface GetMeFollowingContainsParams {

    /**
     * The type to follow.
     */
    type: 'artist' | 'user';

    /**
     * A comma-separated string of the artists or users ids.
     */
    ids: string;
  }

  /**
   * Parameters for deleteMeTracks
   */
  export interface DeleteMeTracksParams {

    /**
     * A comma-separated list of IDs
     */
    ids: string;

    /**
     * It is used to set specified media type.
     */
    Accept?: string;
  }

  /**
   * Parameters for getMeTracks
   */
  export interface GetMeTracksParams {

    /**
     * The index of the first item to return
     */
    offset?: number;

    /**
     * The market (an ISO 3166-1 alpha-2 country code)
     */
    market?: string;

    /**
     * The maximum number of items to return
     */
    limit?: number;

    /**
     * It is used to set specified media type.
     */
    Accept?: string;
  }

  /**
   * Parameters for putMeTracks
   */
  export interface PutMeTracksParams {

    /**
     * A comma-separated list of IDs
     */
    ids: string;

    /**
     * It is used to set specified media type.
     */
    Accept?: string;
  }

  /**
   * Parameters for getSearch
   */
  export interface GetSearchParams {

    /**
     * A comma-separated list of item types to search across. Search results will include hits from all the specified item types; for example q=name:abacab&type=album,track will return both albums and tracks with "abacab" in their name.
     */
    type: string;

    /**
     * The search query's keywords (and optional field filters). The search is not case-sensitive: 'roadhouse' will match 'Roadhouse', 'roadHouse', etc. Keywords will be matched in any order unless surrounded by quotes, thus q=roadhouse&20blues will match both 'Blues Roadhouse' and 'Roadhouse of the Blues'. Quotation marks can be used to limit the match to a phrase: q=roadhouse&20blues will match 'My Roadhouse Blues' but not 'Roadhouse of the Blues'. By default, results are returned when a match is found in any field of the target object type. Searches can be made more specific by specifying an album, artist or track field filter. For example q=album:gold%20artist:abba&type=album will search for albums with the text 'gold' in the album name and the text 'abba' in an artist name. Other possible field filters, depending on object types being searched, include year, genre, upc, and isrc. For example, q=damian%20genre:reggae-pop&type=artist. The asterisk (*) character can, with some limitations, be used as a wildcard (maximum: 2 per query). It will match a variable number of non-white-space characters. It cannot be used in a quoted phrase, in a field filter, or as the first character of the keyword string. Searching for playlists will return results matching the playlist's name and/or description.
     */
    q: string;

    /**
     * The index of the first item to return
     */
    offset?: number;

    /**
     * The market (an ISO 3166-1 alpha-2 country code).  If given, only items with content playable in that market will be returned.
     */
    market?: string;

    /**
     * The maximum number of items to return
     */
    limit?: number;
  }

  /**
   * Parameters for getTracks
   */
  export interface GetTracksParams {

    /**
     * A comma-separated list of IDs
     */
    ids: string;

    /**
     * The market (an ISO 3166-1 alpha-2 country code)
     */
    market?: string;
  }

  /**
   * Parameters for getTracksId
   */
  export interface GetTracksIdParams {
    id: string;

    /**
     * The market (an ISO 3166-1 alpha-2 country code)
     */
    market?: string;
  }

  /**
   * Parameters for getUsersUserIdPlaylists
   */
  export interface GetUsersUserIdPlaylistsParams {

    /**
     * The user's Spotify user ID.
     */
    userId: string;

    /**
     * The index of the first item to return
     */
    offset?: number;

    /**
     * The maximum number of items to return
     */
    limit?: number;

    /**
     * It is used to set specified media type.
     */
    Accept?: string;
  }

  /**
   * Parameters for postUsersUserIdPlaylists
   */
  export interface PostUsersUserIdPlaylistsParams {

    /**
     * The user's Spotify user ID.
     */
    userId: string;
    body: {name: string, public?: boolean};

    /**
     * It is used to set specified media type.
     */
    Accept?: string;
  }

  /**
   * Parameters for getUsersUserIdPlaylistsPlaylistId
   */
  export interface GetUsersUserIdPlaylistsPlaylistIdParams {

    /**
     * The user's Spotify user ID.
     */
    userId: string;

    /**
     * The Spotify playlist ID.
     */
    playlistId: string;

    /**
     * The market (an ISO 3166-1 alpha-2 country code)
     */
    market?: string;

    /**
     * A comma-separated list of fields to filter query
     */
    fields?: string;

    /**
     * It is used to set specified media type.
     */
    Accept?: string;
  }

  /**
   * Parameters for putUsersUserIdPlaylistsPlaylistId
   */
  export interface PutUsersUserIdPlaylistsPlaylistIdParams {

    /**
     * The user's Spotify user ID.
     */
    userId: string;

    /**
     * The Spotify playlist ID.
     */
    playlistId: string;
    body: {name?: string, public?: boolean};

    /**
     * It is used to set specified media type.
     */
    Accept?: string;
  }

  /**
   * Parameters for deleteUsersUserIdPlaylistsPlaylistIdFollowers
   */
  export interface DeleteUsersUserIdPlaylistsPlaylistIdFollowersParams {

    /**
     * The user's Spotify user ID.
     */
    userId: string;

    /**
     * The Spotify playlist ID.
     */
    playlistId: string;
  }

  /**
   * Parameters for putUsersUserIdPlaylistsPlaylistIdFollowers
   */
  export interface PutUsersUserIdPlaylistsPlaylistIdFollowersParams {

    /**
     * The user's Spotify user ID.
     */
    userId: string;

    /**
     * The Spotify playlist ID.
     */
    playlistId: string;
    body: {public?: boolean};
  }

  /**
   * Parameters for getUsersUserIdPlaylistsPlaylistIdFollowersContains
   */
  export interface GetUsersUserIdPlaylistsPlaylistIdFollowersContainsParams {

    /**
     * The user's Spotify user ID.
     */
    userId: string;

    /**
     * The Spotify playlist ID.
     */
    playlistId: string;

    /**
     * A comma-separated list of users ids
     */
    ids: string;
  }

  /**
   * Parameters for deleteUsersUserIdPlaylistsPlaylistIdTracks
   */
  export interface DeleteUsersUserIdPlaylistsPlaylistIdTracksParams {

    /**
     * The user's Spotify user ID.
     */
    userId: string;

    /**
     * The Spotify playlist ID.
     */
    playlistId: string;
    body: {tracks: Array<any>};

    /**
     * It is used to set specified media type.
     */
    Accept?: string;
  }

  /**
   * Parameters for getUsersUserIdPlaylistsPlaylistIdTracks
   */
  export interface GetUsersUserIdPlaylistsPlaylistIdTracksParams {

    /**
     * The user's Spotify user ID.
     */
    userId: string;

    /**
     * The Spotify playlist ID.
     */
    playlistId: string;

    /**
     * The index of the first item to return
     */
    offset?: number;

    /**
     * The market (an ISO 3166-1 alpha-2 country code)
     */
    market?: string;

    /**
     * The maximum number of items to return
     */
    limit?: number;

    /**
     * A comma-separated list of fields to filter query
     */
    fields?: string;

    /**
     * It is used to set specified media type.
     */
    Accept?: string;
  }

  /**
   * Parameters for postUsersUserIdPlaylistsPlaylistIdTracks
   */
  export interface PostUsersUserIdPlaylistsPlaylistIdTracksParams {

    /**
     * The user's Spotify user ID.
     */
    userId: string;

    /**
     * A comma-separated list of Spotify track URIs to add. A maximum of 100 tracks can be added in one request.
     */
    uris: string;

    /**
     * The Spotify playlist ID.
     */
    playlistId: string;

    /**
     * The position to insert the tracks, a zero-based index
     */
    position?: number;

    /**
     * It is used to set specified media type.
     */
    Accept?: string;
  }

  /**
   * Parameters for putUsersUserIdPlaylistsPlaylistIdTracks
   */
  export interface PutUsersUserIdPlaylistsPlaylistIdTracksParams {

    /**
     * The user's Spotify user ID.
     */
    userId: string;

    /**
     * The Spotify playlist ID.
     */
    playlistId: string;
    body: {uris: Array<any>};

    /**
     * It is used to set specified media type.
     */
    Accept?: string;
  }
}

export { ApiService }
