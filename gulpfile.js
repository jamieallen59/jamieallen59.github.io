var gulp = require('gulp')

// Server variables
var webserver = require('gulp-webserver');

// LESS variables
var less = require('gulp-less')
var minifyCSS = require('gulp-minify-css')

gulp.task('serve', function() {
  gulp.src('./public')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('less', function() {
  return gulp.src('./public/css/**/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css'))
})
