import express from "express"
import { checkvalition, logout, submitdata } from "../Controller/Validation.js"
const route=express.Router()
route.post("/sumbit",submitdata)
route.post("/login",checkvalition)
route.post("/logout",logout)
export default route