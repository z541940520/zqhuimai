const gulp = require('gulp');
const html = require('gulp-minify-html');
const css = require('gulp-clean-css');
const script = require('gulp-uglify');
const babel = require('gulp-babel'); //主要
const babelcore = require('babel-core');
const es2015 = require('babel-preset-es2015');
const sass = require('gulp-sass'); //引入sass编译插件 
const sourcemaps = require('gulp-sourcemaps'); //引入生成.map文件模块
const plugins = require('gulp-load-plugins')(); //生成.map文件 返回的是一个函数体。需要再次执行。

//图片压缩
const imagemin = require('gulp-imagemin');

//监听
const watch = require('gulp-watch');

gulp.task('uglifyhtml', () => {
    return gulp.src('src/*.html')
        .pipe(html())
        .pipe(gulp.dest('dist/'))
})
gulp.task('uglifycss', () => {
    return gulp.src('src/css/*.css')
        .pipe(css())
        .pipe(gulp.dest('dist/css'))
})
gulp.task('uglifyhtml', () => {
    return gulp.src('src/*.html')
        .pipe(html())
        .pipe(gulp.dest('dist/'))
});
gulp.task('copyfile', () => {
    return gulp.src('src/font/*')
        .pipe(gulp.dest('dist/font/'));
});
gulp.task('compilesass', () => {
    return gulp.src('src/sass/*.scss')
        .pipe(plugins.sourcemaps.init()) //初始化gulp-sourcemaps插件
        .pipe(plugins.sass({
            outputStyle: 'compressed' //压缩
        }))
        .pipe(plugins.sourcemaps.write('.')) //通过sourcemaps,生成.map文件
        .pipe(gulp.dest('dist/css/'));
});
gulp.task('uglifyimg', () => {
    return gulp.src('src/imags/*.{jpg,png,gif}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});