const config = require('./config');

module.exports = function (gulp, plugins) {

  return function () {

      return gulp.src(['./html/*.html', 'robots.txt', 'manifest.json','manifest.webapp','LICENSE'])
        .pipe(gulp.dest('./dist'));

  }

};
