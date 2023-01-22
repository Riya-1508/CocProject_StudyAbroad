const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/Engineering?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}
module.exports = connectToMongo;  