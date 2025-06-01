// import { singletModel } from "../Schema/Singleproduect.js"

import { OredertModel } from "../Schema/Oreder";

 export const Save= async(req,res)=>{
    const prodect=req.body;
    
 const price=cartItems.reduce((acc,item)=>(acc+item.price*item.qty),0)
 console.log(price+"amount")
    console.log(count)
    const userId=req.body.userId;
    console.log(userId)
    // console.log(id)
    try {

        const singleproduect=await OredertModel.create({prodect:id,userId:userId,count})
       
        res.json({success:true,singleproduect,message:"successfully single produect is geting"})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}