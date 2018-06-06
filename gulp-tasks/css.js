const config = require('./config');

module.exports = function (gulp, plugins) {

  return function () {

      return gulp.src('css/*.css')
        .pipe(plugins.minifyCss({
          compatibility: 'ie8'
        }))
        .pipe(gulp.dest('css'));

  }

};
