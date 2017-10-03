import Ember from 'ember';
import queryExifTags from "../utils/exif-tag";

export default Ember.Route.extend({
  model() {
    return queryExifTags("https://raw.githubusercontent.com/exif-js/exif-js/master/example/dsc_09827.jpg").then(tags => {
      return JSON.stringify(tags, null, "\t");
    });
  }
})
