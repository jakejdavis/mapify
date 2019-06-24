/* tslint:disable */
import { Followers } from './followers';
export interface CurrentUserProfile {
  followers?: Followers;

  /**
   * The user's date-of-birth. This field is only available when the current user has granted access to the user-read-birthdate scope.
   */
  birthdate?: string;

  /**
   * The name displayed on the user's profile.
   */
  displayName?: string;

  /**
   * The user's email address, as entered by the user when creating their account. This email address is unverified; there is no proof that it actually belongs to the user. This field is only available when the current user has granted access to the user-read-email scope.
   */
  email?: string;

  /**
   * Known external URLs for this user.
   */
  external_urls?: {[key: string]: string};

  /**
   * The country of the user, as set in the user's account profile. An ISO 3166-1 alpha-2 country code. This field is only available when the current user has granted access to the user-read-private scope.
   */
  country?: string;

  /**
   * A link to the Web API endpoint for this user.
   */
  href?: string;

  /**
   * The Spotify ID for this user.
   */
  id?: string;

  /**
   * The user's Spotify subscription level: 'premium', 'free', etc. (The subscription level 'open' can be considered the same as 'free'.) This field is only available when the current user has granted access to the user-read-private scope.
   */
  product?: string;

  /**
   * The object type: 'user'
   */
  type?: string;

  /**
   * The Spotify URI for the user.
   */
  uri?: string;
}
