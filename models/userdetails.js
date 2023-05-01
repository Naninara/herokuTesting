const mongoose = require("mongoose");

const Sch = new mongoose.Schema({
  name: String,
  gmail: String,
  password: String,
  type: String,
});

module.exports = mongoose.model("userdata", Sch);
