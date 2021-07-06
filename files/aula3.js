const { texto, arquivos } = require('./base');

// *
// +
// ?
// \ Caractere de escape
// {n,m}

const regExp2 = /\.JPe?G/gi;

for (const arquivo of arquivos) {
    if(regExp2.test(arquivo)) {
        console.log(arquivo);
    }
}