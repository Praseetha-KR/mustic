const gulp = require('gulp');
const watchify = require('watchify');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const scss = require('gulp-sass');
const uglify = require('gulp-uglify');
const gutil = require('gulp-util');
const babel = require('gulp-babel');
const cssnano = require('gulp-cssnano');
const connect = require('gulp-connect');

const srcFolder = './src/';
const srcFile = 'index.js';
const destFolder = './build/';
const destJSFile = 'mustic.min.js';
const destCSSFile = 'mustic.min.css';

gulp.task('server', () => {
    connect.server({
        port: 8000,
        livereload: true
    });
});

gulp.task('js', () => {
    gulp
        .src([srcFolder + srcFile])
        .pipe(
            browserify({
                cache: {}
            })
        )
        .pipe(
            babel({
                presets: ['es2015']
            })
        )
        .pipe(uglify())
        .on('error', function(err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(rename(destJSFile))
        .pipe(gulp.dest(destFolder));
});

gulp.task('scss', () => {
    gulp
        .src(srcFolder + '**/*.scss')
        .pipe(scss().on('error', scss.logError))
        .pipe(cssnano())
        .pipe(rename(destCSSFile))
        .pipe(gulp.dest(destFolder));
});

gulp.task('watch', () => {
    gulp.watch(srcFolder + '**/*.js', ['js']);
    gulp.watch(srcFolder + '**/*.scss', ['scss']);
});

gulp.task('dev', ['js', 'scss', 'server', 'watch']);
gulp.task('build', ['js', 'scss']);
gulp.task('serve', ['server']);
gulp.task('default', ['js', 'scss', 'server']);
