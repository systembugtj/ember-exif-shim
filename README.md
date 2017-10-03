# ember-exif-shim

[![Build Status](https://travis-ci.org/systembugtj/ember-exif-shim.svg?branch=master)](https://travis-ci.org/systembugtj/ember-exif-shim)
[![npm version](https://badge.fury.io/js/ember-exif-shim.svg)](https://badge.fury.io/js/ember-exif-shim)
[![Ember Observer Score](https://emberobserver.com/badges/ember-exif-shim.svg)](https://emberobserver.com/addons/ember-exif-shim)

ember shim for exif-js

* `ember install ember-exif-shim`

0.2.0
* use exif-js npm package.
* exif-tag util

```js
import queryExifTags from "./utils/exif-tag";

model () {
  queryExitTags.then(tags => {
    
  })
}

```

# Development

## Installation

* `git clone <repository-url>` this repository
* `cd ember-exif-shim`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
