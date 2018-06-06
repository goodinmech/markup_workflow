const config = require('./config');

module.exports = function (gulp, plugins) {

  return function () {

      return gulp.src(config.mainSass)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass({
          includePaths: [
            require('bourbon-neat').includePaths,
            require('bourbon').includePaths,
            'vendor/support-for/sass/',
            'vendor/normalize-scss/sass/'
          ]
        }))
        .on('error', plugins.sass.logError)
        .pipe(plugins.autoprefixer({
          browsers: ['last 10 versions'],
          cascade: false
        }))
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest('./css/'))
        .pipe(plugins.browserSync.stream());

  }

};
