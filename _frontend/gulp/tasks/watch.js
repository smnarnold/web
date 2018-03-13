const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const path        = require('path');
const reload      = browserSync.reload;
const runSequence = require('run-sequence');
const watch       = require('gulp-watch');

let watchTask = function () {
  let fileTypes = [
    {
      folder: 'scss',
      tasks: ['stylesLintWatch', 'styles'],
      extensions: ['scss']
    }
  ];

  // add js files only for webpack (browserify is setup with watchify)
  if (global.bundler === 'Webpack') {
    fileTypes.push({
      folder: 'js',
      tasks: ['scriptsLintWatch', 'scriptsWebpack'],
      extensions: ['js'],
    });
  }

  fileTypes.forEach(function (fileType) {
    let extensions = fileType.extensions.length > 1 ? `{${fileType.extensions.join(',')}}` : fileType.extensions.toString();

    let paths = {
      src: [
        path.join(global.paths.assets.src, fileType.folder, '**/*.' + extensions),
        '!**/*___jb_tmp___'
      ]
    };

    watch(paths.src, function () {
      runSequence.apply(null, fileType.tasks);
    }).on('change', reload);
  })
};

gulp.task('watch', watchTask);
module.exports = watchTask;
