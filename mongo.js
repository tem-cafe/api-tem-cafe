const mongoose = require('mongoose');

const db = 'mongodb+srv://tem-cafe:temcafe123@tem-cafe-5fgjs.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(db, {useNewUrlParser: true});

module.exports = mongoose;