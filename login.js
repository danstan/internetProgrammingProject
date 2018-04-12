var express = require("express");
var app = express();
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ocs;
var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});
var User = mongoose.model("User", nameSchema);

app.post("/sendLoginData", (req, res) => {
    var myData = new User(req.body);
    console.log(myData);
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("ocs");
        dbo.createCollection("test", function(err, res){
            if (err) throw err;

            db.close();
        });
        dbo.collection("test").insertOne(myData, function(err, res) {
            if (err) throw err;
            console.log("Feedback sent to database");
            db.close();
        });
    });
});
module.exports = router;






function sendLoginData(logindata){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("ocs");
        dbo.collection("login").insertOne(feedback, function(err, res) {
            if (err) throw err;
            console.log("Login data sent to database");
            db.close();
        });
    });
}

/*function getLoginData(){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("ocs");
        dbo.collection("login").findOne({}, function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
}*/
