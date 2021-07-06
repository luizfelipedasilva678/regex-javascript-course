//g  - global (encontra todas as ocorrências)
//i  - insensitive
//() - groups
//|  - ou

const { texto } = require('./base');

const regExp1 = /(João|Pedro|Paulo)/gi;


console.log(texto);
console.log(regExp1.test(texto));
console.log(regExp1.exec(texto)[0]);

