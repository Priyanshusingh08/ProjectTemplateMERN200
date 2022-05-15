const mongoose = require("../connection");

const schema = new mongoose.Schema({
  name: String,
  address: String,
  features: String,
  city: String,
  road:String,
  plans:Array,
  createAt: { type: Date, default: new Date() },
});

const model = mongoose.model("parking", schema);

module.exports = model;