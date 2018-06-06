const config = require('./config');

module.exports = function (gulp, plugins) {

  return function () {

      let browserSyncOpt = {
        open: false,
        server: {
          baseDir: './'
        },
        directory: true,
        ghostMode: false,
        online: false
      }

      plugins.browserSync.init(browserSyncOpt);

      gulp.watch(['./template/**/*.scss', './sass/**/*.scss'], ['sass']);

      gulp.watch(['./html/**/*.html'], ['template']);
      gulp.watch(['./html/*.html'], ['indexGeneration']);

      // gulp.watch('./build/**/*', ['reload'])
      gulp.watch('./html_build/**/*.html').on('change', plugins.browserSync.reload);

  }

};
