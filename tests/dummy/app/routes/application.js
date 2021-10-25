import Route from '@ember/routing/route';
import queryExifTags from '../utils/exif-tag';

export default class ApplicationRoute extends Route {
  model() {
    return queryExifTags(
      'https://raw.githubusercontent.com/exif-js/exif-js/master/example/dsc_09827.jpg'
    ).then((tags) => {
      return tags;
    });
  }
}
