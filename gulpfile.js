var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');

// !Development Tasks
// Start browserSync server
gulp.task('browserSync', function() {
  browserSync.init({
    proxy: "http://localhost:8000",
  })
});
 
gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.reload({
      stream: true
    })) 
});

// Watchers
gulp.task('watch', ['browserSync', 'sass'], function () {
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('**/*.html', browserSync.reload); 
  gulp.watch('./scripts/**/*.js', browserSync.reload); 
});


// !Optimization Tasks
// Optimizing CSS and JavaScript 
gulp.task('useref', function(){
  return gulp.src('./*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

// Optimizing Images 
gulp.task('images', function(){
  return gulp.src('./images/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin()))
  .pipe(gulp.dest('dist/images'))
});

// Cleaning 
gulp.task('clean:dist', function() {
  return del.sync('dist');
})

// !Build Sequences
gulp.task('default', function (callback) {
  runSequence(['sass', 'browserSync', 'watch'],
    callback
  )
})

gulp.task('build', function (callback) {
  runSequence('clean:dist', 
    ['sass', 'useref', 'images'],
    callback
  )
})