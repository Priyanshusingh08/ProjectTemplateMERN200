const mongoose = require("../connection");

const schema = new mongoose.Schema({
  slot: { type: mongoose.Types.ObjectId, ref: "slot" },
  user: { type: mongoose.Types.ObjectId, ref: "users" },
  carnumber: String,
  checkin: String,
  checkout: String,
  email: String,
  phone: String,
  createAt: { type: Date, default: new Date() },
});

const model = mongoose.model("book", schema);

module.exports = model;
