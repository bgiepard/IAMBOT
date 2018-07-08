// npm install --save-dev gulp gulp-less gulp-autoprefixer gulp-clean-css gulp-uglify gulp-imagemin

'use strict';

const gulp = require('gulp'),
      less = require('gulp-less'),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCSS = require('gulp-clean-css'),
      uglify = require('gulp-uglify'),
      imagemin = require('gulp-imagemin');


const folder = {
    src: 'src/',
    dest: 'dist/'
};


gulp.task('copy:html', () => {
    const out = folder.dest
    return gulp.src(folder.src + 'html/**/*')
        .pipe(gulp.dest(out))
});

gulp.task('build:js', () => {
    return gulp.src(folder.src + 'js/*')
            .pipe(uglify()) 
            .pipe(gulp.dest(folder.dest + 'js/'))
});


gulp.task('build:css', () => {
    return gulp.src(folder.src + 'less/style.less')
            .pipe(less())
            .pipe(autoprefixer({
                browsers: ['last 3 versions']
            }))
            .pipe(cleanCSS())
            .pipe(gulp.dest(folder.dest + 'css/'))
});

gulp.task('copy:images', () => {
    return gulp.src(folder.src + 'images/**/*.{jpg,jpeg,png,gif,svg,iso}')
            .pipe(imagemin())
            .pipe(gulp.dest(folder.dest + 'img'))
});

gulp.task('watch', () => {
    gulp.watch(folder.src + 'html/**', ['copy:html'])
    gulp.watch(folder.src + 'js/*', ['build:js'])
    gulp.watch(folder.src + 'less/*.less', ['build:css'])
    gulp.watch(folder.src + 'images/**', ['copy:images'])
});

gulp.task('run', ['copy:html', 'build:js', 'build:css', 'copy:images', 'watch'])

gulp.task('default', ['run'])