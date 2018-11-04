const express = require('express')
const app = express()
const port = 3000

const test_query = {
  location:{
    $near:{
      $geometry:{
        coordinates: [-76.139049321, 43.052123288],
        spatialReference: {
          wkid: 4326
        },
        type: 'Point'
      }
    }
  }
}

var MongoClient = require('mongodb').MongoClient,
  assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/syr';
// Use connect method to connect to the server

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  findDocuments( db, "code_violations", function(){  db.close(); }, test_query)
});

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  findDocuments( db, "lead_violations", function(){  db.close(); }, test_query)
});


// code_violations
// lead_violations
// water_services
// weekly_crime

app.get('/', (req, res) => {
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



var findDocuments = function(db, coll, callback, query={}) {
    // Get the documents collection
    var collection = db.collection(coll);
    // Find some documents
    collection.find(query).limit(2).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }