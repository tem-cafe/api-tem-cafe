const mongoose = require('mongoose');

const userSchema = {
    name: String,
    email: String,
    password: String
}

module.exports = mongoose.model('User', userSchema, 'tem_cafe_user');