const browserSync = require('browser-sync').create();

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

plugins.browserSync = browserSync;

var tasks = [
  'template',
  'reload',
  'clear',
  'sass',
  'css',
  'build',
  'indexGeneration'
]

tasks.forEach((taskName) => {
  gulp.task(taskName, require(`./gulp-tasks/${taskName}`)(gulp, plugins));
});

gulp.task('watch', ['build'], require(`./gulp-tasks/watch`)(gulp, plugins));
