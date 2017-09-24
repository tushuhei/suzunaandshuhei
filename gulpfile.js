const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const watch = require('gulp-watch');
const cmq = require('gulp-combine-media-queries');
const postcss = require('postcss');
const cssmin = require('gulp-cssnano');
const prefix = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

gulp.task('sass', () => {
    gulp.src('source/sass/main.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(prefix())
    .pipe(rename('main.css'))
    .pipe(gulp.dest('dist'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('cmq', () => {
  gulp.src('dist/*.css')
  .pipe(cmq({
    log: false
  }))
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
  gulp.watch('source/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'cmq']);
