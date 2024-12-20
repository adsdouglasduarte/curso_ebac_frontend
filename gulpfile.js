const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function compilaSass() {
    return gulp.src('./source/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'))
}


//funcao padrao com setTimeout
function newFunction(callBack) {
    setTimeout(function () {
        console.log('Estou executando a newFunction')
        callBack()

    }, 2000)//2 segundos
}

function olaOi(callBack) {
    setTimeout(function () {
        console.log('Estou dizendo Olá!')
        byeGulp()
        callBack()
    }, 1000)//segundo
}

function byeGulp() {
    console.log('good Bye Gulp...')
} //As tarefas privadas são as que não exportamos mais que podemos utilizar como essa function dentro da olaGulp
//usando o Parallel
exports.default = gulp.parallel(newFunction, olaOi)  // As tarefas publicas são as que exportamos 
exports.olaOi = olaOi
exports.sass = compilaSass

