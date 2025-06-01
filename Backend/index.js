import express from "express"
import { ConnectDB } from "./MongoDB/DBconnect.js";
import route from "./Route/VAlidationRoute.js";
import Allproduect from "./Route/Allproduect.js";
import sigleroduect from "./Route/Singleproduect.js"
import cookieParser from "cookie-parser";
import cors from "cors"
import path from 'path'
import { fileURLToPath } from "url";

const app=express();
const PORT=3000;
ConnectDB()
app.use(express.json());
const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.use("/publice/image",express.static(path.join(__dirname,"/publice/image")))
app.use(cookieParser()); 
app.use(cors({origin:["http://localhost:5173"],credentials:true}))
app.use(route);
app.use(Allproduect);
app.use(sigleroduect)
app.listen(PORT,()=>{
    console.log(`server is runing in ${PORT}`)
})