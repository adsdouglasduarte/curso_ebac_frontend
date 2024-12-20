const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')
const imagemin = require('gulp-imagemin')

function comprimeImagem() {
    return gulp.src('./source/imagens/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/imagens'))
}

function comprimeJavascript() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}





function compilaSass() {
    return gulp.src('./source/styles/*.scss')
    .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}


//funcao padrao com setTimeout


 //As tarefas privadas são as que não exportamos mais que podemos utilizar como essa function dentro da olaGulp
//usando o Parallel


exports.default = function () {
    gulp.watch('./source/styles/*.scss', {ignoreInitial:false}, gulp.series(compilaSass))
    gulp.watch('./source/scripts/*.js', {ignoreInitial:false}, gulp.series(comprimeJavascript))
    gulp.watch('./source/imagens/*', {ignoreInitial:false}, gulp.series(comprimeImagem))
}


