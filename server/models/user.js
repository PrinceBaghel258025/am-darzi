const mongoose = require("mongoose");
const bcryptSalt = process.env.BCRYPT_SALT;
const bcrypt = require("bcrypt");

const schema = new mongoose.Schema({
     firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true,
    },
    token:{
        type:String,
        default:''
    }
    
});

const userModel = new mongoose.model("userInfo", schema);

module.exports = userModel;