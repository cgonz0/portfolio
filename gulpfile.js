var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
 
gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.reload({
      stream: true
    })) 
});
 
gulp.task('watch', ['browserSync', 'sass'], function () {
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('./*.html', browserSync.reload); 
  gulp.watch('./scripts/**/*.js', browserSync.reload); 
});

gulp.task('browserSync', function() {
  browserSync.init({
    proxy: "http://localhost:8000",
  })
});


