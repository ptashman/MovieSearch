var express = require('express');
var mongojs = require('mongojs');
var request = require('request');

var app = express();
connection_string = "mongodb://readuser:reader1234@SG-mssmongodev02-874.servers.mongodirector.com:27017/dev-test"
var db = mongojs(connection_string, ['titles']);
var titles = db.collection('titles');
app.get('/titles/:name', function(req, response) {
  var name = req.params.name;
  db.titles.find({TitleName:name}).forEach(function(err, doc) {
    if (err) throw err;
    if (doc) {
      response.render(__dirname + "/titles.ejs", {doc: doc});
    }
  });
});
