/* tslint:disable */
import { AlbumSimple } from './album-simple';
import { Artist } from './artist';
import { Track } from './track';
export interface Search {

  /**
   * Present if the type of search includes 'album'.
   */
  albums?: {href?: string, items?: Array<AlbumSimple>, limit?: number, next?: string, offset?: number, previous?: string, total?: number};

  /**
   * Present if the type of search includes 'artist'.
   */
  artists?: {href?: string, items?: Array<Artist>, limit?: number, next?: string, offset?: number, previous?: string, total?: number};

  /**
   * Present if the type of search includes 'track'.
   */
  tracks?: {href?: string, items?: Array<Track>, limit?: number, next?: string, offset?: number, previous?: string, total?: number};
}
