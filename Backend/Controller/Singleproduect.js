import { singletModel } from "../Schema/Singleproduect.js"

 export const singleprodurct= async(req,res)=>{
    const {id, price}=req.body;
    const userId=req.body.UserId;
    console.log(price)
    // console.log(id)
    try {
        const same= await singletModel.findOne({prodect:id,userId})
        if(same){
            return res.json({ success:false,message:"this produect allredy in side cart"})
        }

        const singleproduect=await singletModel.create({prodect:id,userId:userId,subTotal:price})
       
        res.json({success:true,singleproduect,message:"successfully single produect is geting"})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export const updateCart = async (req, res)=>{
    try {
        const {id,type,UserId} = req.body;
        const cart = await singletModel.findById(id).populate("prodect");
        if(type==="increment"){
            const update = await singletModel.findByIdAndUpdate(id,{$set:{quantity: cart.quantity + 1}, subTotal: cart.subTotal + cart.prodect.price})
        }
        if(type==="decrement"){
            const update = await singletModel.findByIdAndUpdate(id,{$set:{quantity: cart.quantity - 1}, subTotal: cart.subTotal - cart.prodect.price})
        }
        res.status(200).json({success: true, message: "Updated cart"})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export const singleitem= async(req,res)=>{
 
    try {
        const {UserId} = req.body;
        const singleeitem=await singletModel.find({userId: UserId}).populate("prodect") 
        console.log(singleeitem)
        res.json({success:true,singleeitem,message:"successfully single produect is geting"})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}
 export const deletete =async(req,res)=>{
   const id=req.params.id
    try {
        const deleteitems= await singletModel.findByIdAndDelete(id)
        
        res.json({success:true,message:"successfully items is delete"})
    } catch (error) {
        res.json({success:false,message:"unsuccessfully items is delete"})
    }

}