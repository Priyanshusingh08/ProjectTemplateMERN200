const mongoose = require("../connection");

const schema = new mongoose.Schema({
  email: String,
  password: String,
  username: String,
  address: String,
  city: String,
  road: String,
  features: String,
  plans: Array,

  createAt: { type: Date, default: new Date() },
});

const model = mongoose.model("owners", schema);

module.exports = model;
