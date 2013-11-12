'use strict';

// Load the model used by this controller
var Phone = require('../models/phoneModel.js');

exports.optionsCollection = function (req, res) {
  res.send();
};

exports.list = function (req, res) {
  Phone.find(function (err, phones) {    
    if (err) {
      res.status = 404;
      res.send(err);
    }
    res.send(phones);
  });
};

exports.optionsLiteral = function (req, res) {
  res.send();
};

exports.show = function (req, res) {
  Phone.findOne({id: req.params.phoneId}, function (err, phone) {    
    if (err) {
      res.status = 404;
      res.send(err);
    }
    res.send(phone);
  });
};