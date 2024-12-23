const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')
const imagemin = require('gulp-imagemin')
const debug = require('gulp-debug')

function comprimeImagem() {
    return gulp.src('./source/imagens/**/*.{png,jpg,jpeg,gif,svg}')
        .pipe(debug({ title: 'Imagens encontradas:' })) // Loga as imagens encontradas no source
        .pipe(imagemin())
        .pipe(debug({ title: 'Imagens minificadas:' })) // Loga as imagens após a minificação
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

exports.default = function () {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass))
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavascript))
    gulp.watch('./source/imagens/*', { ignoreInitial: false }, gulp.series(comprimeImagem))
}
