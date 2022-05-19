const mongoose = require("../connection");

const schema = new mongoose.Schema({
  title: String,
  email: String,
  password: String,
  address: String,
  city: String,
  phone: String,
  features: Array,
  road: String,
  image: String,
  createAt: Date,
});

const model = mongoose.model("owner", schema);

module.exports = model;
