'use strict';

var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var app = module.exports = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/test');

app.configure(function(){
  app.use(express.compress());
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
  app.use(app.router);
});

// Load the controllers
var phones = require('./app/controllers/phoneController.js');

// Routes of the API
app.options('/api/phones', phones.optionsCollection);
app.get('/api/phones', phones.list);
app.options('/api/phones/:phoneId', phones.optionsLiteral);
app.get('/api/phones/:phoneId', phones.show);

// All the static content will be delivered from this repository
app.use(express.static(__dirname + '/public'));

// Clear the existing phones
var Phone = require('./app/models/phoneModel.js');
Phone.find(function(err, phones) {
  if (phones.length > 0) {
    var i = 0;
    for (i = 0; i < phones.length; i++) {
      phones[i].remove();
    }
  }
});

// Initialize the database with the phones available
fs.readdirSync(__dirname + '/app/Initialize/phone').forEach(function(phoneDataFileName) {
  var aPhoneData = JSON.parse(fs.readFileSync(__dirname + '/app/Initialize/phone/' + phoneDataFileName).toString());  
  new Phone(aPhoneData).save();
});

app.listen(8080);
console.log("Express server listening on port 8080");
