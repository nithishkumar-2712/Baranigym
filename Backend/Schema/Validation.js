import mongoose, { Schema } from "mongoose";
const valitaionSchema=new Schema({
    name:{
        type:String,
        required:true
    },
     password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }, 
    number:{
        type:Number,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    count:{
        type:Number
    },
    role: {
        type: String,
        enum: ['user', 'admin'], 
        default: 'user'
      }
})
 export const valitaionModel=mongoose.model("user",valitaionSchema)