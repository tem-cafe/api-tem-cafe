const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

module.exports = app;