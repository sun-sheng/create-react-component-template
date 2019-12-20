var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json', {
  // declaration: true,
  // allowJs: true,
});
var babel = require('gulp-babel');
var minimist = require('minimist');
var plumber = require('gulp-plumber');

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

gulp.task('dts', function() {
  var tsResult = tsProject.src()
      .pipe(plumber())
      .pipe(tsProject())
  return tsResult.dts
    .pipe(gulp.dest('./' + dest));
});

gulp.task('ts', function() {
  return gulp.src('./src/**/*.{ts,tsx,js,jsx}')
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
  return gulp.src('./src/**/*.!(tsx|ts|jsx|js)')
    .pipe(gulp.dest('./' + dest))
})

gulp.task('compile', gulp.parallel('ts', 'dts', 'assets', 'sass'));

