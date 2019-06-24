/* tslint:disable */
import { Followers } from './followers';
export interface UserProfile {

  /**
   * The name displayed on the user's profile.
   */
  displayName?: string;

  /**
   * Known external URLs for this user.
   */
  external_urls?: {[key: string]: string};
  followers?: Followers;

  /**
   * A link to the Web API endpoint for this user.
   */
  href?: string;

  /**
   * The Spotify ID for this user.
   */
  id?: string;

  /**
   * The object type: 'user'
   */
  type?: string;

  /**
   * The Spotify URI for the user.
   */
  uri?: string;
}
