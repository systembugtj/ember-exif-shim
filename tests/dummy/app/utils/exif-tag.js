import { Promise } from 'rsvp';
import EXIF from 'EXIF';

function getExifTags(img) {
  return new Promise(function (resolve) {
    EXIF.getData(img, function () {
      resolve(EXIF.getAllTags(this));
    });
  });
}

function fetchImage(src) {
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.onload = () => {
      resolve(image);
    };
    image.onerror = reject;
    image.src = src;
  });
}

export default function queryExifTags(src) {
  return fetchImage(src).then((img) => {
    return getExifTags(img);
  });
}
