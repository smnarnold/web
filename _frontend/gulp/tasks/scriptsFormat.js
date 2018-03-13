const gulp         = require('gulp');
const handleErrors = require('../lib/handleErrors');
const path         = require('path');
const prettify     = require('gulp-jsbeautifier');

let paths = {
  src: path.join(global.paths.assets.src, 'js/**/*.js'),
  dest: path.join(global.paths.assets.src, 'js'),
};

let scriptsFormatTask = function () {
  return gulp.src(paths.src)
    .on('error', handleErrors)
    .pipe(prettify({
      "indent_size": 2,
      "indent_char": " ",
      "indent_with_tabs": false,
      "eol": "\n",
      "end_with_newline": true,
      "indent_level": 0,
      "preserve_newlines": true,
      "max_preserve_newlines": 10,
      "space_in_paren": false,
      "space_in_empty_paren": false,
      "jslint_happy": false,
      "space_after_anon_function": true,
      "brace_style": "collapse,preserve-inline",
      "unindent_chained_methods": false,
      "break_chained_methods": false,
      "keep_array_indentation": false,
      "unescape_strings": false,
      "wrap_line_length": 0,
      "e4x": false,
      "comma_first": false,
      "operator_position": "before-newline",
    }))
    .pipe(prettify.reporter())
    .pipe(gulp.dest(paths.dest));
};

gulp.task('scriptsFormat', scriptsFormatTask);
module.exports = scriptsFormatTask;
