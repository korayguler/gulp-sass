'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

gulp.task('sass', () => {
  return gulp
    .src('sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
});

gulp.task('watch', () => {
  browserSync.init({
    server: './',
  });

  gulp.watch('sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('watch'));
