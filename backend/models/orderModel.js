const mongoose = require("../connection");

const schema = new mongoose.Schema({
  parking: String,
  plan: String,
  expiringOn: String,
  createAt: { type: Date, default: new Date() },
});

const model = mongoose.model("order", schema);

module.exports = model;