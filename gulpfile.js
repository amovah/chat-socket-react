/* eslint-disable */

var gulp = require('gulp');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');
var del = require('del');
var webpack = require('webpack-stream');
var less = require('gulp-less');
var cleanCss = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('clean', function() {
  return del('build');
});

gulp.task('babel', ['clean'], function() {
  return gulp.src(['src/**/*.js', '!src/client/**/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('build'));
});

gulp.task('lint', function() {
  return gulp.src('src/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('webpack:prod', function() {
  return gulp.src('src/client/client.js')
        .pipe(webpack(require('./webpack.prod.config.js')))
        .pipe(gulp.dest('build/static/js/'))
});

gulp.task('webpack:dev', function() {
  return gulp.src('src/client/client.js')
        .pipe(webpack(require('./webpack.dev.config.js')))
        .pipe(gulp.dest('build/static/js/'))
});

gulp.task('copy', ['clean'], function() {
  return [
    gulp.src('src/views/**/*')
    .pipe(gulp.dest('build/views')),
    gulp.src(['src/static/**/*', '!src/static/css/**/*'])
    .pipe(gulp.dest('build/static/'))
  ];
});

gulp.task('less', ['clean'], function() {
  return gulp.src('src/static/css/main.less')
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(gulp.dest('build/static/css'));
});

gulp.task('prod', ['lint', 'copy', 'babel', 'webpack:prod', 'less']);

gulp.task('dev', ['copy', 'babel', 'webpack:dev', 'less']);

gulp.task('watch', function() {
  gulp.watch('src/**/*', ['dev']);
});
