var gulp = require('gulp');

var size = require('gulp-size');

var dirNode = './node_modules';

var dirSrc = './src';
var dirDest = './dest';

gulp.task('assets', ['assets:font-awesome', 'assets:bootstrap'], function () {
  gulp.src([dirSrc + '/assets/**/*'], {base: dirSrc + '/assets/'})
    .pipe(size({title: 'assets'}))
    .pipe(gulp.dest(dirDest));
});

gulp.task('assets:font-awesome', function () {
  gulp.src([dirNode + '/font-awesome/fonts/**/*'], {base: dirNode + '/font-awesome/'})
    .pipe(size({title: 'font-awesome'}))
    .pipe(gulp.dest(dirDest));
});

gulp.task('assets:bootstrap', function () {
  gulp.src([dirNode + '/bootstrap-sass/assets/fonts/**/*'], {base: dirNode + '/bootstrap-sass/assets/'})
    .pipe(size({title: 'bootstrap'}))
    .pipe(gulp.dest(dirDest));
});

gulp.task('default', function () {
  // default task
});
