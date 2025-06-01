import mongoose, { Schema } from "mongoose";
const OrederSchema=new Schema({
   
  prodect:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"prodect",
       
    },
    count:{
        type:Number
    },
    price:{
        type:Number
    },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
           
        }
    
    })
     export const OredertModel=mongoose.model("Oreder",OrederSchema)