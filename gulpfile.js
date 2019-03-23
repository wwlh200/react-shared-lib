const gulp = require('gulp');
const sass = require('gulp-sass');

const fileFolder = './packages/functional-modules/';

gulp.task('sass', function () {
    gulp.src(`${fileFolder}src/styles/index.scss`)
        .pipe(sass())
        .pipe(gulp.dest(`${fileFolder}dist`));
});

gulp.task('json', function () {
    gulp.src(`${fileFolder}src/i18n/*.json`)
        .pipe(gulp.dest(`${fileFolder}dist/i18n`));
});

gulp.task('default', ['sass', 'json']);
