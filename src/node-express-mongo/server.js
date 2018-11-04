console.log('Server-side code running');

const express = require('express');
var MongoClient = require('mongodb').MongoClient,
  assert = require('assert');

  const app = express();
  
  
  
// Connection URL
const url = 'mongodb://localhost:27017/syr';
const test_query = {
  location:{
    $near:{
      $geometry:{
        coordinates: [-76.139049321, 43.052123288],
        type: 'Point'
      }
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
app.post('/clicked', (req, res) => {
  const click = {clickTime: new Date()};
  console.log(click);
  console.log(db);

  db.collection('clicks').save(click, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log('click added to db');
    res.sendStatus(201);
  });
});