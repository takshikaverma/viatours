const mongoose = require('mongoose');
const db = require('../data_base/connection')
const SignupSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true 
    },
    lastName: {
        type: String,
        required: true 
    },
    "email": String,
    "password": String
});
const SignupModel = mongoose.model('signup', SignupSchema)
module.exports = SignupModel;