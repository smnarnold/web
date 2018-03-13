const gulp       = require('gulp');
const sizereport = require('gulp-sizereport');
const path       = require('path');

let paths = {
  src: path.join(global.paths.assets.dest, '**/*'),
};

let sizereportTask = function () {
  return gulp.src(paths.src)
    .pipe(sizereport({
      gzip: true
    }));
};

gulp.task('sizereport', sizereportTask);
module.exports = sizereportTask;
