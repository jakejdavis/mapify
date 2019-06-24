/* tslint:disable */
import { Track } from './track';
export interface SavedTrack {

  /**
   * The date and time the track was added in ISO 8601 format. Note that some very old playlists may return null in this field.
   */
  added_at?: string;
  track?: Track;
}
