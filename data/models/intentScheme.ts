import mongoose from "mongoose";

const IntentSchema = new mongoose.Schema({
    name : {
      type : String,
      required : true
    },
    training_data :{
      type : [{
        sentence : {
          type : String
        }
      }]
    },
    response :{
      type : [String]
    }
},{timestamps : true});

module.exports = mongoose.model('Intent',IntentSchema);
