/* tslint:disable */
import { Artist } from './artist';
export interface UserFollowed {

  /**
   * Present if the type of followe items is 'artist'.
   */
  artists?: {cursor?: {after?: string}, href?: string, items?: Array<Artist>, limit?: number, next?: string, total?: number};
}
