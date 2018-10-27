const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  name: String,
  description: String,
  startDate: Date,
  endDate: Date
});

const Model = mongoose.model('EventModel', Schema);

module.exports = {
  EventModel: Model,
  EventSchema: Schema
};
