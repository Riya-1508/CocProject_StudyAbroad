const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    phnNumber:{
        type: String,
       required:true,
       unique:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    confirmpassword:{
        type: String,
        required: true
    },
  });
  const User = mongoose.model('user', UserSchema);
  module.exports = User;