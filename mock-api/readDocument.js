const client = require('./db/client');
const fs = require('fs');

(async () => {
    

    const db = await client;
    var dbo = db.db('datatable');

    const tabledata = dbo.collection('tabledata');

    console.time('MNGET');
    const docs = await tabledata.find().limit(5).toArray();

    console.timeEnd('MNGET');

    console.log(docs);

    // console.time('FW');
    // fs.writeFileSync('docs.json', JSON.stringify(docs.docs));
    // console.timeEnd('FW');


    console.log('READ DONE');

})()