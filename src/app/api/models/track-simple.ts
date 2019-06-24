/* tslint:disable */
import { ArtistSimple } from './artist-simple';
export interface TrackSimple {

  /**
   * The Spotify ID for the track.
   */
  id?: string;

  /**
   * The artists who performed the track. Each artist object includes a link in href to more detailed information about the artist.
   */
  artists?: Array<ArtistSimple>;

  /**
   * The disc number (usually 1 unless the album consists of more than one disc).
   */
  disc_number?: number;

  /**
   * The track length in milliseconds.
   */
  duration_ms?: number;

  /**
   * Whether or not the track has explicit lyrics (true = yes it does; false = no it does not OR unknown).
   */
  explicit?: boolean;

  /**
   * Known external URLs for this track.
   */
  external_urls?: {[key: string]: string};

  /**
   * A link to the Web API endpoint providing full details of the track.
   */
  href?: string;

  /**
   * A list of the countries in which the track can be played, identified by their ISO 3166-1 alpha-2 code.
   */
  available_markets?: Array<string>;

  /**
   * Part of the response when Track Relinking is applied. If true, the track is playable in the given market. Otherwise false.
   */
  is_playable?: boolean;

  /**
   * Part of the response when Track Relinking is applied, and the requested track has been replaced with different track. The track in the linked_from object contains information about the originally requested track.
   */
  linked_from?: {external_urls?: {[key: string]: string}, href?: string, id?: string, type?: string, uri?: string};

  /**
   * The name of the track.
   */
  name?: string;

  /**
   * A URL to a 30 second preview (MP3 format) of the track.
   */
  preview_url?: string;

  /**
   * The number of the track. If an album has several discs, the track number is the number on the specified disc.
   */
  track_number?: number;

  /**
   * The object type: 'track'.
   */
  type?: string;

  /**
   * The Spotify URI for the track.
   */
  uri?: string;
}
