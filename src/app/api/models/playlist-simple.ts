/* tslint:disable */
import { UserProfile } from './user-profile';
import { Image } from './image';
export interface PlaylistSimple {
  owner?: UserProfile;

  /**
   * True if the owner allows other users to modify the playlist.
   */
  collaborative?: boolean;

  /**
   * A link to the Web API endpoint providing full details of the playlist.
   */
  href?: string;

  /**
   * The Spotify ID of the playlist.
   */
  id?: string;

  /**
   * The cover art for the album in various sizes, widest first.
   */
  images?: Array<Image>;

  /**
   * The name of the playlist.
   */
  name?: string;

  /**
   * Known external URLs for this album.
   */
  external_urls?: {[key: string]: string};

  /**
   * The playlist's public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. For more about public/private status, see Working with Playlists.
   */
  public?: boolean;

  /**
   * The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version
   */
  snapshot_id?: string;
  tracks?: {href?: string, total?: number};

  /**
   * The object type: 'playlist'.
   */
  type?: string;

  /**
   * Spotify URI of the playlist.
   */
  uri?: string;
}
