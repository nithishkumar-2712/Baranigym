import express from "express"
import { Save } from "../Controller/Order"
const route=express.Router()
route.post("/orders/:id",Save)
export default route
