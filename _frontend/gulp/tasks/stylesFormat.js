const gulp         = require('gulp');
const csscomb      = require('gulp-csscomb');
const handleErrors = require('../lib/handleErrors');
const path         = require('path');

let paths = {
  src: path.join(global.paths.assets.src, 'scss/!(abstracts|bootstrap|vendors)/**/*.scss'),
  dest: path.join(global.paths.assets.src, 'scss'),
};

let stylesFormatTask = function () {
  return gulp.src(paths.src, {base: paths.dest})
    .on('error', handleErrors)
    .pipe(csscomb({
      config: './.csscomb.json',
      // verbose: true,
    }))
    .pipe(gulp.dest(paths.dest));
};

gulp.task('stylesFormat', stylesFormatTask);
module.exports = stylesFormatTask;
