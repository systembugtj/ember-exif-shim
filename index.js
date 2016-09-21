/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-exif-shim',
  included(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/exif-js/exif.js');
    app.import('vendor/exif.js', {
      exports: {
        EXIF: ['default']
      }
    });
  }
};
