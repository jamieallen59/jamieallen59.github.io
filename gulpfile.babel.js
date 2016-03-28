import 'babel-polyfill'
import gulp from 'gulp'

gulp.task('default', ['watch']);

// Watcher
gulp.task('watch', ['images', 'html', 'less', 'js', 'serve'], () => {
    gulp.watch('public/index.html', ['html']);
    gulp.watch('public/less/**/*.less', ['less']);
    gulp.watch('public/js/**/*.js', ['js']);
});

// Server variables
import webserver from 'gulp-webserver'

// Server
gulp.task('serve', () => {
    gulp.src('./')
    .pipe(webserver({
        open: false
    }));
});

// Image processing tools
import imagemin from 'gulp-imagemin'

// Image processing
gulp.task('images', () => {
  return gulp.src('./public/images/*.jpg')
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest('dist/images'))
})

// Html
gulp.task('html', () => {
  return gulp.src('./public/index.html')
    .pipe(gulp.dest('./'))
})

// LESS tools
import less from 'gulp-less'
import minifyCSS from 'gulp-minify-css'
import concat from 'gulp-concat'
import autoprefixer from 'gulp-autoprefixer'

// Less
gulp.task('less', () => {
    return gulp.src('./public/less/**/*.less')
    .pipe(less({compress: true}))
    .pipe(autoprefixer())
    .pipe(concat('styles.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist'))
})

// Javascript, es2015 and React
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import uglify from 'gulp-uglify'
import streamify from 'gulp-streamify'

gulp.task('js', () => {
   browserify({ debug: true })
      .transform(babelify)
      .require("./public/js/script.js", { entry: true })
      .bundle()
      .on("error", (err) => {
        console.log("Error: " + err.message);
      })
      .pipe(source('main.js'))
      .pipe(streamify(uglify()))
      // .pipe(fs.createWriteStream("bundle.js"));
      .pipe(gulp.dest('./dist'))
})
