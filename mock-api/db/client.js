const MongoClient = require('mongodb').MongoClient;

const dbURL = 'mongodb://192.168.5.30:27017/';

module.exports = MongoClient.connect(dbURL);