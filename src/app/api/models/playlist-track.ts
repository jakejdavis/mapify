/* tslint:disable */
import { UserProfile } from './user-profile';
import { Track } from './track';
export interface PlaylistTrack {

  /**
   * The date and time the track was added in ISO 8601 format. Note that some very old playlists may return null in this field.
   */
  added_at?: string;
  added_by?: UserProfile;

  /**
   * Whether this track is a [local file](https://developer.spotify.com/web-api/local-files-spotify-playlists/) or not.
   */
  is_local?: boolean;
  track?: Track;
}
