const client = require('./db/client');

module.exports = client.then(res => db.db('datatable'));