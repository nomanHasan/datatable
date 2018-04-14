const client = require('./db/client');

(async () => {
    

    const db = await client;
    var dbo = db.db('datatable');

    const collection = dbo.collection('tabledata');

    await collection.deleteMany();
    console.log('DEL DONE');
})()