const mongoose = require("../connection");

const schema = new mongoose.Schema({
  City: String,
  Type: String,
  Carnumber: String,
  Checkin: String,
  Checkout: String,
  Email: String,
  Phone: String,
  createAt: { type: Date, default: new Date() },
});

const model = mongoose.model("book", schema);

module.exports = model;