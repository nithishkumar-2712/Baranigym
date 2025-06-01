import mongoose, { Schema } from "mongoose";
const singleSchema=new Schema({
   
  prodect:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"prodect",
    },
    userId:{
      type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    quantity:{
      type:Number,
      default:1
    },
    subTotal:{
      type:Number,
      
    }
})
 export const singletModel=mongoose.model("Addtocart",singleSchema)