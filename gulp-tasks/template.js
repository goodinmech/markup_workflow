const config = require('./config');

module.exports = function (gulp, plugins) {

  return function () {

    return gulp.src('html/**/*.html')
      .pipe(plugins.include())
        .on('error', console.log)
      .pipe(gulp.dest('./html_build'));

  }

};
