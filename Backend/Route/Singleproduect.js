import express from "express"
import { deletete, singleitem, singleprodurct, updateCart } from "../Controller/Singleproduect.js"
import { authu } from "../Authcotion/authu.js"
const route=express.Router()
route.post("/single",authu,singleprodurct)
route.get("/getitems",authu,singleitem)
route.put("/updateCart",authu,updateCart)
route.delete("/delete/:id",authu,deletete)
export default route