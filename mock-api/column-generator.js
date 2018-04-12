const datagen = require('./data-generator');
const fs = require('fs');

const colNumber = 100000;
let columns = '';

for (let i = 0; i < colNumber; i++) {
    columns+= datagen.word(7) + (i+1 < colNumber ? ', ': '');
}

console.log(columns);
fs.writeFileSync('columns.txt', columns);