gulp.task('js', function() {
  return gulp.src('js/*.js')
  .pipe(concat('script.min.js'))
  .pipe(uglify());
  //.pipe(browserSync.stream());
  //.pipe(gulp.dest('dist/js'));
});
