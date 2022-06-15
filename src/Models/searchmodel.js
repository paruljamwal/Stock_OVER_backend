const mongoose = require("mongoose")

const searchSchema = new mongoose.Schema(
    {
      image: { type: String, require: true },
      name: { type: String, require: true },
      price:{type:Number, require:true},
      assembly:{type:String},
      color:{type:String},
      material:{type:String},
      age:{type:Number},
      types:{type:String},
      brands:{type:String},
      features:{type:String},
      availabilty:{type:String}
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
  
  module.exports = mongoose.model("search", searchSchema);