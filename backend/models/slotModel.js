const mongoose = require("../connection");

const schema = new mongoose.Schema({
  title: String,
  type: String,
  price: Number,
  serial: String,
  total: Number,
  booked: Number,
  owner: { type: mongoose.Types.ObjectId, ref: "owner" },
  createAt: Date,
});

const model = mongoose.model("slot", schema);

module.exports = model;
