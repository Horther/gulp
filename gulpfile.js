const gulp = require('gulp');

function funcaoPadrao(callback){
    console.log('Executando via gulp');
    callback();
}//npm run gulp

function dizOi(callback){
    console.log('Ola Gulp');
    dizTchau();
    callback();
}//npm run gulp dizOi

function dizTchau(){
    console.log('Tchau gulp');
}//tarefa privada exemplo

exports.default = gulp.series(funcaoPadrao, dizOi);
exports.dizOi = dizOi;