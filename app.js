const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require("cors");
const coffeRoute = require("./routes/coffee-route");
const userRoute = require("./routes/user-route");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.use('/tem-cafe', coffeRoute);
app.use('/usuario', userRoute);

app.use((req, res, next) => {
  const error = new Error("Route Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: error.message
    });
});

module.exports = app;