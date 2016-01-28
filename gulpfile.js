'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
// var browserSync = require('browser-sync');
// var reload = browserSync.reload;

var gutil = require("gulp-util");
//var webpack = require("webpack");
//var webpackConfig = require("./webpack.config.js");

var paths = {
  scripts: ['src/js/*.js', 'node_modules/**/*.js'],
};

// gulp.task("webpack", function (callback) {
//     var myConfig = Object.create(webpackConfig);
//     // run webpack
//     webpack(
//         // configuration
//         myConfig
//         , function (err, stats) {
//             if (err) throw new gutil.PluginError("webpack", err);
//             gutil.log("[webpack]", stats.toString({
//                 //     // output options
//             }));
//             callback();
//         });
// });

// JavaScript 格式校验
gulp.task('jshint', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(reload({stream: true, once: true}))
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.if(!browserSync.active, $.jshint.reporter('fail')))
        ;
});

// 拷贝相关资源
gulp.task('copy', function () {
    return gulp.src([
        // 'app/*',
        'src/*',
        // '!src/*.html',
        '!src/js/*',
        '!src/sass',
        '!src/sass/*',
        'node_modules/zepto/zepto.min.js'
    ], {
        dot: true
    })
    .pipe(gulp.dest(function (file) {
            if (file.path.indexOf('zepto') > -1) {
                return 'dist/js';
            }
            return 'dist';
        }))
    .pipe($.size({title: 'copy'}));
});

// 图片优化
gulp.task('images', function () {
    return gulp.src('src/img/**/*')
        .pipe($.cache($.imagemin({
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/img'))
        .pipe($.size({title: 'images'}));
});

gulp.task('minifycss', function() {
    return gulp.src('src/css/*.css')      //压缩的文件
        // .pipe($.sass().on('error', $.sass.logError))
        // .pipe($.autoprefixer())
        .pipe(gulp.dest('dist/css'))  //输出文件夹
        .pipe($.minifyCss())   //执行压缩
        .pipe(gulp.dest('dist/css'))  //输出文件夹
        .pipe($.rename({suffix: '.min'}))
        .pipe($.size({title: 'css'}));
});

gulp.task('html', function () {
    return gulp.src('src/**/*.html')
        // Minify Any HTML
        .pipe($.minifyHtml())
        // Output Files
        .pipe(gulp.dest('dist'))
        .pipe($.size({title: 'html'}));
});

gulp.task('clean', function (cb) {
    del(['dist/*'], {dot: true}, cb);
});

// 监视源文件变化自动cd编译
gulp.task('watch', function () {
    gulp.watch('src/**/*.html', ['html']);
    // gulp.watch('src/sass/**/*.scss', ['minifycss']);
    gulp.watch('src/img/**/*', ['img']);
    // 使用 watchify，不再需要使用 gulp 监视 JS 变化
    // gulp.watch('app/js/**/*', ['jshint']);
    gulp.watch('src/js/**/*.js', ['webpack']);
});

gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'));
});

// 启动预览服务，并监视 Dist 目录变化自动刷新浏览器
// gulp.task('browser-sync', function () {
//     browserSync.init({
//         server: "dist"
//     });
// });

// 默认任务
gulp.task('default', function (cb) {
    runSequence('clean', ['minifycss', 'html', 'images', 'copy', 'scripts'], 'watch', cb);
});
