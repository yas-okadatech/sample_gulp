import gulp from 'gulp';

import size from'gulp-size';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';

let dirNode = './node_modules';

let dirSrc = './src';
let dirDest = './dest';

let dirSrcStyle = dirSrc + '/style';
let dirDestStyle = dirDest + '/style';

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

gulp.task('sass', () => {
  return gulp.src(dirSrcStyle + '/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [
        dirSrcStyle,
        dirNode + '/bootstrap-sass/assets/stylesheets',
        dirNode + '/font-awesome/scss/'
      ]
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dirDestStyle))
    .pipe(size());
});

gulp.task('default', () => {
  // default task
});
