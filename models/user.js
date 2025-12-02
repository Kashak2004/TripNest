const { string, required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchems = new Schema({
    email: {
        type: String,
        required: true,
    },
});

userSchems.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',userSchems);