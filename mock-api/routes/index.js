var express = require('express');
const client = require('../db/client');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', async function(req, res, next) {
  const db = await client;
  var dbo = db.db('datatable');

  var limit = req.params.limit || 10;

  const tabledata = dbo.collection('tabledata');

  console.time('MNGET');
  const docs = await tabledata.find().limit(limit).toArray();

  res.status(200).json(docs);
})

module.exports = router;
