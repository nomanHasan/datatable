const client = require('./db/client');
const randomWords = require('random-words');
const datagen = require('./data-generator');
const primes = require('./primes');
const fs = require('fs');


const rowSize = 100;


(async () => {


    const db = await client;
    var dbo = db.db('datatable');

    const collection = dbo.collection('tabledata');

    const columns = fs.readFileSync('columns.txt', 'utf8').split(',');

    const colSize = columns.length;

    let rowBatch = [];
    const batchSize = rowSize / 100;
    let rowCounter = 0;
    let batchCounter = 0;

    for (let i = 0; i < rowSize; i++) {

        let rowData = {};
        columns.forEach((c, index) => {
            c = c.replace(/[\n\t ]/i, '');

            if(primes.includes(index)) {
                rowData[c] = datagen.num(index);
            } else {
                rowData[c] = randomWords();
            }

        });

        rowBatch.push(rowData);
        rowCounter++;

        console.log(i);

        if (rowCounter > batchSize) {
            const res = await collection.insertMany(rowBatch);
            console.log(rowBatch);
            rowBatch = [];
            rowCounter = 0;

            batchCounter++;
        }
    };
})();