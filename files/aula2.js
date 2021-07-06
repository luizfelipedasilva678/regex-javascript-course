//g  - global (encontra todas as ocorrências)
//i  - insensitive
//() - groups
//|  - ou

const { texto } = require('./base');

const regExp1 = /(João|Pedro|Paulo)/gi;

//console.log(texto);
//console.log(texto.match(regExp1));
//console.log(texto.replace(/João/gi,'Felipe'));
//console.log(texto.replace(/(João)/gi,'<b>$1</b>'));

