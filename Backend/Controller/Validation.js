import { valitaionModel } from "../Schema/Validation.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

 export const submitdata=async(req,res)=>{
     try {
        const{name,email,number,age,password}=req.body
        console.log(req.body)
        
        const hashpassword=await bcrypt.hash(password,10)

        const feachdata=await valitaionModel.create({name,email,number,age,password:hashpassword})
        const token= jwt.sign({id:feachdata._id},"nithishkumar",{expiresIn:"8d"})
        res.cookie("token",token,{httpOnly:true,maxAge:8*24*60*60*1000})      
        res.json({success:true,feachdata,message:"sucessfully submit a data"})
    } catch (error) {
        res.json({success:false,message:error.message})
    
    }
}
export const checkvalition=async(req,res)=>{
    try {
        const {email ,password}=req.body
            const check= await valitaionModel.findOne({email:email})
            if(!check){
          
                
                return res.json({ success:false,message:" this incemail incorrect "})
            }
            const chevkpassword= await bcrypt.compare(password,check.password)
            if(!chevkpassword){
                // if(count>5){
                //     await valitaionModel.findByIdAndDelete({})
                //     count++
                //     Save()
                // }
                return res.json({ success:false,message:" this passworde incorrect "})

            }
            const token= jwt.sign({id:check._id},"nithishkumar",{expiresIn:"8d"})
            res.cookie("token",token,{httpOnly:true,maxAge:8*24*60*60*1000})   
       
           res.json({ success:true,message:"sucesfully checingting data"})
      
        } catch (error) {
            res.json({ success:false,message:error.message })}}
            
 export const logout=async(req,res)=>{
    try {
        res.clearCookie("token", {
            httpOnly: true,
            // secure: true,
            // sameSite: "Strict",
          });
      
    
        res.json({success:true,message:"successsfully logout"})
    } catch (error) {
        res.json({success:false,message:error.message})
    }

}
