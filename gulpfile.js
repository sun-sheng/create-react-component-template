var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var minimist = require('minimist');
// var plumber = require('gulp-plumber');

var knownOptions = {
  string: 'dest',
  default: { env: process.env.NODE_ENV || 'lib' }
};
var options = minimist(process.argv.slice(2), knownOptions);
var dest = options.dest || 'lib';

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./' + dest));
});

gulp.task('jsx', function() {
  return gulp.src('./src/**/*.{js,jsx}')
    .pipe(babel({
      presets: [
        "@babel/typescript",
        [
          "@babel/preset-env",
          {
            "modules": dest === 'lib' ? "cjs" : false
          }
        ],
        "@babel/preset-react"
      ]
    }))
    .pipe(gulp.dest('./' + dest))
});

gulp.task('assets', function() {
  return gulp.src('./src/**/*.!(jsx|js)')
    .pipe(gulp.dest('./' + dest))
})

gulp.task('compile', gulp.parallel('jsx', 'assets', 'sass'));

