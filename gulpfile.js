// General
var gulp = require('gulp');
var gutil = require('gulp-util');

// CSS processing
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// JS processing
var jshint = require('gulp-jshint');
var webpack = require('gulp-webpack');


// Default task
gulp.task('default', ['build'], function() {
  // see the dependencies above for the default build
});

gulp.task('build', ['javascript', 'build-sass', 'html'], function() {
});

gulp.task('jshint', function() {

  // Run jshint on our JS files

  return gulp.src('src/js/**/*.js')
    .pipe(jshint({
      esversion: 6
    }))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('javascript', ['jshint'], function() {

  return gulp.src('src/js/root.js')
    .pipe(webpack({
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
              presets: ['es2015']
            }
          }
        ]
      },
      output: {
        filename: 'bundle.js',
      },
      resolve: {
        extensions: ['', '.js']
      },
    }))
    .pipe(gulp.dest('build/js'));
});

gulp.task('build-sass', function() {

  // our root sass file is styles.scss
  // Process it into a CSS file then run Autoprefixer on it, finally place it in build

  return gulp.src('src/scss/styles.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('build/css'));
});

gulp.task('html', function() {

  // Just grab all html files and move them to build

  return gulp.src('src/**/*.html', { base: 'src' })
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {

  gulp.watch('src/js/**/*.js', ['javascript']);

  // We want to rebuild if any of the sass files change
  gulp.watch('src/scss/**/*.scss', ['build-sass']);

  gulp.watch('src/**/*.html', ['html']);
});
