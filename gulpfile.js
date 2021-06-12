var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', () => {
  return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});
 
gulp.task('watch', () => {
  gulp.watch('/sass/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass'));
