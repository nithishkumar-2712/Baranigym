import mongoose, { Schema } from "mongoose";
const produectSchema=new Schema({
    name:{
        type:String,
        required:true
    },
     seller:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    }, 
    price:{
        type:Number,
        required:true
    },
    qut:{
        type:Number,
        required:true
    },
    stock:{
        type:Number
    },
filename:{
        type:String
    }

})
 export const produectModel=mongoose.model("prodect",produectSchema)