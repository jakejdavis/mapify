/* tslint:disable */
import { Image } from './image';
export interface Category {

  /**
   * A link to the Web API endpoint returning full details of the category.
   */
  href?: string;
  icons?: Array<Image>;

  /**
   * The Spotify category ID of the category.
   */
  id?: string;

  /**
   * The name of the category.
   */
  name?: string;
}
