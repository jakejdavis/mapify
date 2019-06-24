/* tslint:disable */
export interface ArtistSimple {

  /**
   * Known external URLs for this artist.
   */
  external_urls?: {[key: string]: string};

  /**
   * A link to the Web API endpoint providing full details of the artist.
   */
  href?: string;

  /**
   * The Spotify ID for the artist.
   */
  id?: string;

  /**
   * The name of the artist.
   */
  name?: string;

  /**
   * The object type: 'artist'
   */
  type?: string;

  /**
   * The Spotify URI for the artist.
   */
  uri?: string;
}
