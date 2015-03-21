var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gulpFilter = require('gulp-filter');
var mainBowerFiles = require('main-bower-files');
var runSequence = require('run-sequence');
var install = require('gulp-install');
var rimraf = require('rimraf');

var js_dest_path = 'assets/lib/js';
var css_dest_path = 'assets/lib/css';
var img_for_fancybox = 'assets/lib/css';

var jsFilter = gulpFilter('*.js');
var cssFilter = gulpFilter('*.css');
var imgFilter = gulpFilter(['*.gif', '*.png']);

gulp.task('build', function(callback) {
    runSequence('clean', 'install', 'exportBowerFiles', callback);
});

gulp.task('install', function() {
    return gulp.src(['./bower.json', './package.json'])
        .pipe(install());
});

gulp.task('clean', function() {	
	rimraf("assets/lib", function(){});
    return rimraf("bower_components", function(){});

});

gulp.task('exportBowerFiles', function() {
    return gulp.src(mainBowerFiles())

    .pipe(jsFilter)
        .pipe(gulp.dest(js_dest_path))
        .pipe(jsFilter.restore())

    .pipe(cssFilter)
        .pipe(gulp.dest(css_dest_path))
        .pipe(jsFilter.restore())

    .pipe(imgFilter)
        .pipe(gulp.dest(img_for_fancybox))
});