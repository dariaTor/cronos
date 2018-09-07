var gulp = require('gulp'), //сам галп
	sass = require('gulp-sass'), //для компиляции стилей
	sourcemaps = require('gulp-sourcemaps'), //для построения карты стилей - хз пока зачем
	watch = require('gulp-watch'), //обновление файлов в режиме реального времени
	rigger = require('gulp-rigger'), //забыла зачем
	browserSync = require("browser-sync"), //загрузить новые версии плагинов и др. js
    reload = browserSync.reload,
    pug = require('gulp-pug'), //удобная верстка
    gcmq = require('gulp-group-css-media-queries'), //группировка медиазапросов
    clear = require('gulp-minify-css'); //минифицировать css

var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: { //Пути откуда брать исходники
        html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'src/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
        style: 'src/styles/main.scss',
        img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/styles/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

gulp.task('html:build', function () {
    gulp.src(path.src.html) //Выберем файлы по нужному пути
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

gulp.task('scripts', function () {
  gulp.src('./bower_components/jquery/dist/jquery.min.js')
  .pipe(gulp.dest('./build/js/'));
  gulp.src('./bower_components/semantic-ui-dropdown/dropdown.min.js')
  .pipe(gulp.dest('./build/js/'));
  gulp.src('./bower_components/semantic-ui-dropdown/index.js')
  .pipe(gulp.dest('./build/js/'));
  gulp.src('./bower_components/semantic-ui-transition/transition.min.js')
  .pipe(gulp.dest('./build/js/'));
});

gulp.task('sass-compile', function() {
	return 	gulp.src('./src/styles/**/*.scss')
			.pipe(sourcemaps.init())
			.pipe(sass().on('error', sass.logError))
            .pipe(gcmq())
            .pipe(clear())
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest('./build/styles/'))
});

//pug
gulp.task('pug', function () {
    return gulp.src('./src/pug/*.pug')
        .pipe(pug({pretty: true}))
        .on('error', function (err) {
            console.log(err);
            this.emit('end');
        })
        .pipe(gulp.dest('./build/'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('browser-sync', function () {
  var files = [
    './build/index.html',
    './build/styles/*.css',
    './build/js/*.js'
  ];  
  browserSync.init(files, {
    server: {
      baseDir: './build'
    }
  });
});

gulp.task('watch', function(){
	gulp.watch('./src/styles/**/*.scss', ['sass-compile']);
    gulp.watch('./src/pug/*.pug', ['pug']);
});

gulp.task("default", ["sass-compile", "watch", "browser-sync"]);