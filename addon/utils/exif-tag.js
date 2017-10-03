import Ember from "ember";
import EXIF from "EXIF";

export function fetchImage(src) {
  return new Ember.RSVP.Promise(function(resolve, reject) {
    const img = new Image();
    img.onload = () => {
      resolve(img);
    }
    img.onerror = reject;
    img.src = src;
  });
}

export function getExifTags(img) {
  return new Ember.RSVP.Promise(function(resolve) {
    EXIF.getData(img, function() {
      resolve(EXIF.getAllTags(this));
    });
  });
}

export default function queryExifTags(src) {
  return fetchImage(src).then(img => {
    return getExifTags(img);
  });
}
