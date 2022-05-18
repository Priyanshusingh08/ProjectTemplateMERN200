const mongoose = require("../connection");

const schema = new mongoose.Schema({
  email: String,
  password: String,
  username: String,
  address: String,
  city: String,
  phone: String,

  createAt: { type: Date, default: new Date() },
});

const model = mongoose.model("owner", schema);

module.exports = model;
