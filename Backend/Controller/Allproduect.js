import { produectModel } from "../Schema/Allproduect.js"

 export const Allproduect=async(req,res)=>{
    const{name,price,filename,about,qut,seller,stock}=req.body
    try {
        const uploade= await produectModel.create({name,price,filename:`./publice/image${req.file.filename}`,about,qut,seller,stock})
        res.json({uploade,success:true,message:"sucessfully uploading the produect"})
    } catch (error) {
        res.json({success:false,message:error.message})
        
    }
}
 export const getallproduect=async(req,res)=>{

    try {
        const getallproduect= await produectModel.find()
        res.json({getallproduect,success:true,message:"sucessfully uploading the produect"})
    } catch (error) {
        res.json({success:false,message:error.message})
        
    }
}
 export const deleteproduect=async(req,res)=>{
    const id=req.params.id
    try {
        const deleteproduect= await produectModel.findByIdAndDelete(id)
        res.json({deleteproduect,success:true,message:"sucessfully single produect is delete"})
    } catch (error) {
        res.json({success:false,message:error.message})
        
    }
}