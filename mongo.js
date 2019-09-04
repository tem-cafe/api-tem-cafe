const mongoose = require('mongoose');

const db = 'mongodb+srv://tem-cafe:<password>@tem-cafe-5fgjs.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(db, {useNewUrlParser: true});

module.exports = mongoose;