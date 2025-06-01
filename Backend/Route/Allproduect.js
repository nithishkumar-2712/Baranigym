import express from "express"
import { uploade } from "../multer/multer.js"
import { Allproduect, deleteproduect, getallproduect } from "../Controller/Allproduect.js"
const route=express.Router()
route.post("/uploade",uploade.single("file"),Allproduect);
route.get("/getproduect", getallproduect)
route.delete("/deletproduect/:id", deleteproduect)
export default route