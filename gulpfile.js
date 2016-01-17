var gulp = require('gulp')

// Server variables
var serve = require('gulp-serve')

// LESS variables
var less = require('gulp-less')
var minifyCSS = require('gulp-minify-css')

gulp.task('serve', serve({
  root: 'public',
  port: 4433
}))

gulp.task('less', function() {
  return gulp.src('./public/css/**/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css'))
})
