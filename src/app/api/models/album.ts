/* tslint:disable */
import { Artist } from './artist';
import { Image } from './image';
import { TrackSimplePage } from './track-simple-page';
export interface Album {

  /**
   * The Spotify ID for the album.
   */
  id?: string;

  /**
   * The type of the album: one of 'album', 'single', or 'compilation'.
   */
  album_type?: string;

  /**
   * The markets in which the album is available: ISO 3166-1 alpha-2 country codes. Note that an album is considered available in a market when at least 1 of its tracks is available in that market.
   */
  available_markets?: Array<string>;

  /**
   * The copyright statements of the album.
   */
  copyrights?: Array<{text?: string, type?: string}>;

  /**
   * Known external IDs for this album.
   */
  external_ids?: {[key: string]: string};

  /**
   * Known external URLs for this album.
   */
  external_urls?: {[key: string]: string};

  /**
   * A list of the genres used to classify the album. For example: 'Prog Rock', 'Post-Grunge'. (If not yet classified, the array is empty.)
   */
  genres?: Array<string>;

  /**
   * A link to the Web API endpoint providing full details of the album.
   */
  href?: string;

  /**
   * The artists of the album. Each artist object includes a link in href to more detailed information about the artist.
   */
  artists?: Array<Artist>;

  /**
   * The cover art for the album in various sizes, widest first.
   */
  images?: Array<Image>;

  /**
   * The name of the album.
   */
  name?: string;

  /**
   * The popularity of the album. The value will be between 0 and 100, with 100 being the most popular. The popularity is calculated from the popularity of the album's individual tracks.
   */
  popularity?: number;

  /**
   * The date the album was first released, for example '1981-12-15'. Depending on the precision, it might be shown as '1981' or '1981-12'.
   */
  release_date?: string;

  /**
   * The precision with which release_date value is known: 'year', 'month', or 'day'.
   */
  release_date_precision?: string;
  tracks?: TrackSimplePage;

  /**
   * The object type: 'album'.
   */
  type?: string;

  /**
   * The Spotify URI for the album.
   */
  uri?: string;
}
