const mongoose = require("../connection");

const schema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  city: String,
  state: String,
  road:String,
  image:String,
  about:String,

  createAt: { type: Date, default: new Date() },
});

const model = mongoose.model("ownerprofile", schema);

module.exports = model;
