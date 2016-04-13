var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync');

var reload = browserSync.reload;
var exec = require('child_process').exec;
//var spawn = require('child_process').spawn;

// Uglify javascript
// gulp.task('scripts', function() {
//   gulp.src('js/*.js')
//     .pipe(plumber())
//     .pipe(uglify())
//     .pipe(gulp.dest('build/js'))
// });

//Run django server
gulp.task('runserver', function() {
	proc = exec('python manage.py runserver')
});

// Default task: Watch Files For Changes & Reload browser
gulp.task('default', ['runserver'], function () {
  browserSync({
    notify: false,
    proxy: "127.0.0.1:8000"
  });
 
  gulp.watch(['**/*.*'], reload);

});
