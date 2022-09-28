const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");
const connection = require('../db/mongoosedb');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    password: {
        type: String,
        required: true
    },
    email: String,
    createdate: {
        type: Date,
        default: Date.now
    }
});

option = {
    usernameField: 'id',
    passwordField: 'password'
}

UserSchema.plugin(passportLocalMongoose, option);
const User = connection.model('User', UserSchema);
module.exports = User;