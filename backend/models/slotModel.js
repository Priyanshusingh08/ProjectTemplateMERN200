const mongoose = require("../connection");

const schema = new mongoose.Schema({
  type: String,
  city: String,
  address: String,
  features: String,
  expireOn: Number,
  price: Number,
  image: String,
  date: Date,
  parking: { type: Date, default: new Date() },
  createAt: { type: Date, default: new Date() },
});

const model = mongoose.model("slot", schema);

module.exports = model;