console.log('Server-side code running');

const express = require('express');
var MongoClient = require('mongodb').MongoClient,
  assert = require('assert');

  const app = express();
  
var x = -76.139049321;
var y = 43.052123288;
  
// Connection URL
const url = 'mongodb://localhost:27017/syr';
const test_query = {
  location:{
    $near:{
      $geometry:{
        coordinates: [x, y],
        type: 'Point'
      },
      $maxDistance: 1000,
    }
  }
}

// serve files from the public directory
app.use(express.static('public'));

// connect to the db and start the express server
let db;

MongoClient.connect(url, (err, database) => {
  if(err) {
    return console.log(err);
  }
  db = database;
  // start the express web server listening on 8080
  app.listen(8080, () => {
    console.log('listening on 8080');
  });
});

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// add a document to the DB collection recording the click event
app.get('/crime', (req, res) => {
  console.log(test_query)
  findDocuments(db, "weekly_crime", test_query, res);
});

app.get('/water_break', (req, res) => {
  console.log(test_query)
  findDocuments(db, "water_main_breaks", test_query, res);
});

app.get('/lead_violations', (req, res) => {
  console.log(test_query)
  findDocuments(db, "lead_violations", test_query, res);
});

app.get('/code_violations', (req, res) => {
  console.log(test_query)
  findDocuments(db, "code_violations", test_query, res);
});

var findDocuments = function(db, coll, query={}, res) {
    // Get the documents collection
    var collection = db.collection(coll);
    // Find some documents
    const result = collection.find(query).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(JSON.stringify(docs).length)
      res.send(docs)
    });
  }

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}