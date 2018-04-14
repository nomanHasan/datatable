const client = require('./db/client');

(async () => {
    

    const db = await client;
    var dbo = db.db('datatable');

    const res = await dbo.createCollection('tabledata');
    console.log(res);
})()