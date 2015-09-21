"use strict"

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var exec = require('child_process').exec;

var config = {
	paths: {
		js: './src/js/**/*.*',
    distJs: './dist/js',
    excludeJs: '!./src/js/**/*.*',
		files: './src/**/*.*',
		dist: './dist',
		src: './src',
    scripts: './dist/scripts',
    noty1: './node_modules/noty/js/noty/packaged/jquery.noty.packaged.min.js',
    noty2: './node_modules/noty/js/noty/layouts/topRight.js' 
	}
}

gulp.task('browserify', function() {
    gulp.src('src/js/main.js')
      .pipe(browserify({transform:'reactify'}))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('copyNonJsFiles', function() {
    gulp.src([config.paths.files, config.paths.excludeJs])
      .pipe(gulp.dest(config.paths.dist));
});

gulp.task('copyJsFiles', function() {
    gulp.src(config.paths.js)
      .pipe(gulp.dest(config.paths.distJs));
});

gulp.task('copyNoty', function() {
  gulp.src([config.paths.noty1, config.paths.noty2])
      .pipe(gulp.dest(config.paths.scripts));
});

gulp.task('server', function (cb) {
  exec('node server.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('copy', ['copyNonJsFiles', 'copyJsFiles', 'copyNoty']);

gulp.task('default', ['copy', 'server']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});