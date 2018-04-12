const client = require('./db/client');
const randomWords = require('random-words');
const fs = require('fs');


const rowSize = 10000;


(async () => {
    

    const db = await client;
    var dbo = db.db('datatable');

    // const res = await dbo.createCollection('tabledata');


    const collection = dbo.collection('tabledata');

    // await collection.deleteMany();

    const columns = ['index'];

    const columnString = fs.readFileSync('columns.txt', 'utf8');

    columns.push(...columnString.split(','));

    const colSize = columns.length;

    let rowBatch = [];
    const batchSize = rowSize / 100;
    let rowCounter = 0;
    let batchCounter = 0;

    for (let i = 0; i < rowSize; i++) {
        
        let rowData = {};
        rowData = {
            'index': i
        };
        columns.forEach((c, index) => {
            if (c === 'index') {
                return;
            }
            rowData[c] = randomWords();
        });

        rowBatch.push(rowData);
        rowCounter++;

        if (rowCounter > batchSize) {
            const res = await collection.insertMany(rowBatch);
            rowBatch = [];
            rowCounter = 0;

            batchCounter++;
            console.log('Inserted Batch', batchCounter);
        }

    };
})();
