import multer from "multer";
import path from "path"
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./publice/image/")
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+ path.extname(file.originalname))
    }
})
const maxSize=2*1000*1000
 export const uploade=multer({
    storage:storage,
    limits:{
        filedSize:maxSize
    }
})