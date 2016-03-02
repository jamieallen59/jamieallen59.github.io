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
    gulp.src('build')
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
    .pipe(gulp.dest('build/images'))
})

// Html
gulp.task('html', () => {
  return gulp.src('./public/index.html')
    .pipe(gulp.dest('build'))
})

// LESS tools
import less from 'gulp-less'
import minifyCSS from 'gulp-minify-css'
import concat from 'gulp-concat'

// Less
gulp.task('less', () => {
    return gulp.src('./public/less/**/*.less')
    .pipe(less({compress: true}))
    .pipe(concat('index.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('build'))
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