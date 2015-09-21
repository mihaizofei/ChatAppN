"use strict"

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var exec = require('child_process').exec;

var config = {
	paths: {
		js: './src/js/**/*.js',
		css: './src/css/*.css',
		html: './src/*.html',
		dist: './dist',
		src: './src',
		json: './src/*.json',
		distCss: './dist/css',
    distJs: './dist/js'
	}
}

gulp.task('browserify', function() {
    gulp.src('src/js/main.js')
      .pipe(browserify({transform:'reactify'}))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('html', function() {
    gulp.src(config.paths.html)
      .pipe(gulp.dest(config.paths.dist));
});

gulp.task('json', function() {
    gulp.src(config.paths.json)
      .pipe(gulp.dest(config.paths.dist));
});

gulp.task('css', function() {
    gulp.src(config.paths.css)
      .pipe(gulp.dest(config.paths.distCss));
});

gulp.task('js', function() {
    gulp.src(config.paths.js)
      .pipe(gulp.dest(config.paths.distJs));
});

gulp.task('server', function (cb) {
  exec('node server.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('copy', ['html', 'json', 'css', 'js']);

gulp.task('default', ['copy', 'server']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});