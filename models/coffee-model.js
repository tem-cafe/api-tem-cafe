const mongoose = require("mongoose");

const coffeeSchema = {
  email: String,
  fizCafe: Boolean,
  temCafe: Boolean,
  temCopo: Boolean,
  temPo: Boolean,
  temAcucar: Boolean,
  date: { type: Date, default: Date.now }
};

module.exports = mongoose.model("Tem-cafe", coffeeSchema, "tem_cafe");
