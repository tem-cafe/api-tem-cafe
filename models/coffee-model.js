const mongoose = require("mongoose");

const coffeeSchema = {
  user: String,
  "tem-cafe": Boolean,
  "tem-copo": Boolean,
  "tem-po": Boolean,
  "tem-acucar": Boolean,
  date: { type: Date, default: Date.now }
};

module.exports = mongoose.model("Tem-cafe", coffeeSchema, "tem_cafe");
