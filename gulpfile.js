const gulp = require('gulp');

gulp.task('booty', () => {
  gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.min.*'])
    .pipe(gulp.dest('public/css'));
});

gulp.task('default', ['booty']);
