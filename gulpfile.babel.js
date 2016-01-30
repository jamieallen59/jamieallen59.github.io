import 'babel-polyfill'
import gulp from 'gulp'

// Server variables
import webserver from 'gulp-webserver'

// LESS variables
import less from 'gulp-less'
import minifyCSS from 'gulp-minify-css'

import gulpSequence from 'gulp-sequence'

gulp.task('default', gulpSequence('less', 'js', 'serve'));

// Server
gulp.task('serve', () => {
  gulp.src('./public')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

// Less
gulp.task('less', () => {
  return gulp.src('./public/css/**/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css'))
})

// Javascript, es2015 and React
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'

gulp.task('js', () => {
   browserify({ debug: true })
      .transform(babelify)
      .require("./public/js/script.js", { entry: true })
      .bundle()
      .on("error", (err) => {
        console.log("Error: " + err.message);
      })
      .pipe(source('main.js'))
      // .pipe(fs.createWriteStream("bundle.js"));
      .pipe(gulp.dest('./build/'))
})
