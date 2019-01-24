/*!
 * gulp
 * $ npm install gulp-concat gulp-uglify gulp-rename gulp-ruby-sass gulp-clean-css gulp-notify gulp-autoprefixer gulp-livereload gulp-watch gulp-imagemin gulp-cache --save-dev
*/

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	sass = require('gulp-ruby-sass'),
	minifycss = require('gulp-clean-css'),
	notify = require('gulp-notify'),
	autoprefixer = require('gulp-autoprefixer'),
	livereload = require('gulp-livereload'),
	watch = require('gulp-watch'),
	imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache');


gulp.task('scripts', function() {
    return gulp.src([
		'js/app.js'
    ]) //Add which files to concaternate here
      .pipe(concat('app.js'))
		.pipe(rename({suffix: '.min'}))
        .pipe(uglify())
      	.pipe(gulp.dest('js/'))
		.pipe(notify({ message: 'Scripts task complete' }))
		.pipe(livereload());
});


gulp.task('styles', function() {
	return sass([
		'css/style.scss'
	])
	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
	.pipe(rename({ suffix: '.min' }))
	.pipe(minifycss())
	.pipe(gulp.dest('css/'))
	.pipe(notify({ message: 'Styles task complete' }))
	.pipe(livereload());
});

// Images
gulp.task('images', function() {
	return gulp.src('img/**/*')
		.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
		.pipe(gulp.dest('img/'))
	.pipe(notify({ message: 'Images task complete' }));
});


gulp.task('watch', function() {

	// Watch .scss files
	gulp.watch('css/*.scss', gulp.parallel(['styles']));

	// Watch .js files
	gulp.watch('js/**/*.js', gulp.parallel(['scripts']));


	// Create LiveReload server
	livereload.listen();

	// Watch any files in dist/, reload on change
	gulp.watch(['css/style.min.css, js/app.min.js'])
	.on('change', function(path, stats) {
        console.log(path);
        livereload.changed
    })

});


gulp.task('default', gulp.series(['scripts', 'styles', 'images', 'watch'], function(done) {
	done();
}));
