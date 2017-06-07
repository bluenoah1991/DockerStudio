var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var webpack = require('webpack-stream');
var path = require('path');

// var autoprefixer = require('gulp-autoprefixer');
// var gutil = require('gulp-util');
// var minifyCSS = require('gulp-minify-css');
// var replace = require('gulp-replace');
// var uglify = require('gulp-uglify');
// var WebpackNotifierPlugin = require('webpack-notifier');

var dirs = {
    src: './src',
    lib: './lib',
    scss: './app/scss',
    scssDist: './dist/css',
    js: './app/js',
    jsDist: './dist/js'
};

var files = {
    appJs: 'app.es6',
    appJsDist: 'app.js'
};

// tasks

gulp.task('webpack', function(){
    return gulp.src(dirs.js + '/' + files.appJs)
        .pipe(webpack({
            output: {
                path: path.resolve(dirs.jsDist),
                filename: files.appJsDist
            },
            module: {
                loaders: [
                    {
                        test: /\.(js|jsx|es6)$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/,
                        query: {
                            cacheDirectory: true
                        }
                    },
                    {
                        enforce: 'pre',
                        test: /\.js$/,
                        loader: 'source-map-loader',
                        exclude: /node_modules/
                    }
                ]
            },
            resolve: {
                extensions: ['', '.es6', '.jsx', '.js']
            },
            devtool: 'source-map'
        }))
        .pipe(gulp.dest(dirs.jsDist));
});

gulp.task('scripts', function(){
    gulp.src(dirs.src + '/**/*.*')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dirs.lib));
});

gulp.task('sass', function(){
    return gulp.src(dirs.scss + '/**/*.*')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dirs.scssDist));
});
