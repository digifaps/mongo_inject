//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/test_DB';

var date = Date() 

//command line arguments

var arg1 = process.argv[2];
var arg2 = process.argv[3];
var arg3 = process.argv[4];

// Use connect method to connect to the Server

MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // Get the 'box' collection
    var collection = db.collection('box');

    //Create newdevice
    var newdevice = {type: arg1 , serial: arg2 , macadrr: arg3 , install_date: date };

    // Insert new device
    collection.insert([newdevice], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted new Device into the "box" collection.', result);
      }
      //Close connection
      db.close();
    });
  }
});
