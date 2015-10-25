import gulp from 'gulp';

import size from'gulp-size';

let dirNode = './node_modules';

let dirSrc = './src';
let dirDest = './dest';

gulp.task('assets', ['assets:font-awesome', 'assets:bootstrap'], () => {
  gulp.src([dirSrc + '/assets/**/*'], {base: dirSrc + '/assets/'})
    .pipe(size({title: 'assets'}))
    .pipe(gulp.dest(dirDest));
});

gulp.task('assets:font-awesome', () => {
  gulp.src([dirNode + '/font-awesome/fonts/**/*'], {base: dirNode + '/font-awesome/'})
    .pipe(size({title: 'font-awesome'}))
    .pipe(gulp.dest(dirDest));
});

gulp.task('assets:bootstrap', () => {
  gulp.src([dirNode + '/bootstrap-sass/assets/fonts/**/*'], {base: dirNode + '/bootstrap-sass/assets/'})
    .pipe(size({title: 'bootstrap'}))
    .pipe(gulp.dest(dirDest));
});

gulp.task('default', function () {
  // default task
});
