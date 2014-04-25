var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var minifyCSS = require('gulp-minify-css');

gulp.task('styles', function () {
  //concatcss
  gulp.src('public/stylesheets/css/*.css')
    .pipe(concatCss("build.css"))
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('public/build/css/'));
});

gulp.task('images', function () {
  //image compression
  return gulp.src('public/stylesheets/assets/**/*')
    .pipe(imagemin({
        use: [pngcrush()]
    }))
    .pipe(gulp.dest('build/assets/'));
});

gulp.task('default', ['styles','images']);
