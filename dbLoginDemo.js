var express = require('express')
    , router = express.Router();
var db = require('../db');
var ObjectId = require('mongodb').ObjectID;
var bodyParser=require("body-parser");

router.post('/test', function(req, res) {

});
module.exports = router;
var uri = "mongodb://localhost.mongodb.net/ocs";
MongoClient.connect(uri, function(err, client) {
    const collection = client.db("ocs").collection("login");
    // perform actions on the collection object
    client.close();
});