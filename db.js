const mongoose = require('mongoose');

require("dotenv").config();

const atlasConnectionString = process.env.ATLAS_CONNECTION_STRING;

const connectToMongo = async () => {
  try {
    mongoose.connect(atlasConnectionString, () => {
      console.log("Connected to Mongo Successfully");
    });
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectToMongo;