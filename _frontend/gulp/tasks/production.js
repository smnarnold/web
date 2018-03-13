const gulp        = require('gulp');
const runSequence = require('run-sequence');

let productionTask = function (cb) {
  global.production = true;
  runSequence('stylesFormat', 'stylesLint', 'styles', 'scriptsFormat', 'scriptsLint', 'scripts' + global.bundler, 'cacheBreaker', cb);
};

gulp.task('production', productionTask);
module.exports = productionTask;
