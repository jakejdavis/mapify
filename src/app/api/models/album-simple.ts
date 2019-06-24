/* tslint:disable */
import { Image } from './image';
export interface AlbumSimple {

  /**
   * The type of the album: one of 'album', 'single', or 'compilation'.
   */
  album_type?: string;

  /**
   * The markets in which the album is available: ISO 3166-1 alpha-2 country codes. Note that an album is considered available in a market when at least 1 of its tracks is available in that market.
   */
  available_markets?: Array<string>;

  /**
   * Known external URLs for this album.
   */
  external_urls?: {[key: string]: string};

  /**
   * A link to the Web API endpoint providing full details of the album.
   */
  href?: string;

  /**
   * The Spotify ID for the album.
   */
  id?: string;

  /**
   * The cover art for the album in various sizes, widest first.
   */
  images?: Array<Image>;

  /**
   * The name of the album.
   */
  name?: string;

  /**
   * The object type: 'album'.
   */
  type?: string;

  /**
   * The Spotify URI for the album.
   */
  uri?: string;
}
