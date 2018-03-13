const gulp         = require('gulp');
const assign       = require('lodash.assign');
const babelify     = require('babelify');
const browserify   = require('browserify');
const browserSync  = require('browser-sync');
const buffer       = require('vinyl-buffer');
const gulpif       = require('gulp-if');
const handleErrors = require('../lib/handleErrors');
const path         = require('path');
const sizereport   = require('gulp-sizereport');
const source       = require('vinyl-source-stream');
const sourcemaps   = require('gulp-sourcemaps');
const stripDebug   = require('gulp-strip-debug');
const uglify       = require('gulp-uglify');
const watchify     = require('watchify');

let paths = {
  src: path.join(global.paths.assets.src, 'js/boot.js'),
  dest: path.join(global.paths.assets.dest, 'js'),
};

let b = null;

let scriptsBrowserifyTask = function () {

  // add custom browserify options here
  let customOptions = {
    entries: [paths.src],
    debug: !global.production,
  };

  let options = assign({}, watchify.args, customOptions);
  b = global.production ? browserify(options) : watchify(browserify(options));

  // add transformations here
  b.transform('babelify', {
    presets: ['env'], // babel env preset
  });

  b.on('update', bundle); // on any dep update, runs the bundler

  return bundle();
};

function bundle() {
  return b.bundle()
    .on('error', handleErrors) // log errors if they happen
    .pipe(source('boot.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(gulpif(!global.production, sourcemaps.init({loadMaps: true}))) // loads map from browserify file
    .pipe(gulpif(global.production, stripDebug())) // Remove js debugging statements
    .pipe(gulpif(global.production, uglify()))
    // Add transformation tasks to the pipeline here.
    .pipe(gulpif(!global.production, sourcemaps.write())) // writes .map file
    .pipe(sizereport({gzip: true, total: false}))
    .pipe(gulp.dest(paths.dest))
    .pipe(gulpif(!global.production, browserSync.stream()));
}

gulp.task('scriptsBrowserify', scriptsBrowserifyTask);
module.exports = scriptsBrowserifyTask;
