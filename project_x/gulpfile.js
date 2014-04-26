var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
/*var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('public/stylesheets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/stylesheets/css'));
});*/

gulp.task('styles', function () {
  //concatcss
  gulp.src('public/stylesheets/**/*.css')
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
    .pipe(gulp.dest('public/build/assets/'));
});

gulp.task('default', ['styles','images']);
