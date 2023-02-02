const mongoose = require('mongoose');
const { Schema } = mongoose;

const CollegeSchema = new Schema({
    name:{
        type: String,
       
    },
    details:{
        type: String,
       
    },
    img:{
        type: String,
       
    },
//     title:{
//         type: String,
       
//     },
//     info:{
//         type: String,
       
//     },
//     fees:{
//         type: String,
       
//     },
//    exams:{
//         type: String,
       
//     },
   
  });
  const College = mongoose.model('college', CollegeSchema);
  module.exports = College;