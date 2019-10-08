const mongoose = require("mongoose");

const attSchema = {
  versao: String,
  link: String,
  date: { type: Date, default: Date.now }
};

module.exports = mongoose.model("Atualizacao", attSchema, "atualizacao");
