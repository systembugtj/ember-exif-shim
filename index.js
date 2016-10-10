/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-exif-shim',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

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
