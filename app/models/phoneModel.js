'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var phoneSchema = new Schema({
    id: String,
    name: String,
    description: String,
    images: [String],
    imageUrl: String,
    additionalFeatures: String,
    android: {},
    availability: [String],
    battery: {},
    camera: {},
    connectivity: {},
    display: {},
    hardware: {},
    sizeAndWeight: {},
    storage: {}
});

module.exports = mongoose.model('Phone', phoneSchema);
