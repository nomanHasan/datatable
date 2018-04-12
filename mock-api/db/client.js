const MongoClient = require('mongodb').MongoClient;

const dbURL = 'mongodb://127.0.0.1:27017/';

module.exports = MongoClient.connect(dbURL);