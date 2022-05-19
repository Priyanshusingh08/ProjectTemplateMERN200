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
  plans: [{ type: mongoose.Types.ObjectId, ref: "plan" }],
  createAt: Date,
});

const model = mongoose.model("owner", schema);

module.exports = model;
