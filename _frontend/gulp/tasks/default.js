const gulp        = require('gulp');
const runSequence = require('run-sequence');

let defaultTask = function (cb) {
  global.production = false;
  runSequence.options.showErrorStackTrace = false;
  runSequence('stylesFormat', 'stylesLint', 'styles', 'scriptsFormat', 'scriptsLint', 'scripts' + global.bundler, 'browserSync', 'watch', cb);
};

gulp.task('default', defaultTask);
module.exports = defaultTask;
