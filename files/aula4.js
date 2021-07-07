const {html} = require('./base');

const r = /<.+?>.+?<\/.+?>/g;

console.log(html.match(r));