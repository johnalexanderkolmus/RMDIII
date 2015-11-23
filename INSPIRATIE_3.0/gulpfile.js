var gulp = require('gulp'),
	browserify = require('browserify'),
	buffer = require('gulp-buffer'),
	compass = require('gulp-compass'),
	header = require('gulp-header'),
	gutil = require('gulp-util'),
	jshint = require('gulp-jshint'),
	source = require('vinyl-source-stream'),
	sourcemaps = require('gulp-sourcemaps'),
	stylish = require('jshint-stylish'),
	uglify = require('gulp-uglify');

gulp.task('styles', function(){
	return gulp.src('./css/src/**/*.scss')
		.pipe(compass({
			config_file: './config.rb',
			css: './css',
			sass: 'css/src',
			environment: 'production'
		}))
		.on('error', function(err){
			gutil.log(err.message);
			gutil.beep();
			this.emit('end');
		})
		.pipe(gulp.dest('./css'))
});

gulp.task('scripts', function(){
	var bundler = browserify({
		entries: ['./_js/app.js'],
		debug: true
});

	return bundler.bundle()
		.on('error', function(err) {
			gutil.log(err.message);
			gutil.beep();
			this.emit('end');
		})
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./', {
    	sourceRoot: '../'
    }))
		.pipe(gulp.dest('./js'));
});

gulp.task('watch', ['styles', 'scripts'], function(){

	gulp.watch(['_js/**/*.js','_hbs/**/*.hbs'], ['scripts']);
	gulp.watch(['css/src/**/*.scss'], ['styles']);

});
