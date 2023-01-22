const mongoose = require('mongoose');
const { Schema } = mongoose;

const CollegeSchema = new Schema({
    title:{
        type: String,
       
    },
    info:{
        type: String,
       
    },
    fees:{
        type: String,
       
    },
   exams:{
        type: String,
       
    },
   
  });
  const College = mongoose.model('college', CollegeSchema);
  module.exports = College;