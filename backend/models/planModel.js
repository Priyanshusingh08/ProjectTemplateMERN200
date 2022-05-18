const mongoose = require("../connection");

const schema = new mongoose.Schema({
  name: String,
  price: String,
  validity: String,
  features: String,
  createAt: Date,
});

const model = mongoose.model("plan", schema);

module.exports = model;
