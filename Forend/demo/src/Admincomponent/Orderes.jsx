import React, { useRef } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from '../config/axios'
import"../layout/Navebar.css"

 function Orderes() {
   const[file,setFile]=useState()
   const[filename,setFilename]=useState("")
  const inputvale=useRef("")
  const{register,handleSubmit}=useForm()
  const Savefile=()=>{
    setFile(inputvale.current.files[0]);
    setFilename(inputvale.current.files[0].name);
  }
  const onsubmit=async(items)=>{
    const formdata= new FormData();
    formdata.append("file",file)
    formdata.append("filename",filename)
    formdata.append("name",items.name)
    formdata.append("price",items.price)
    formdata.append("about",items.about)
    formdata.append("stock",items.stock)
    formdata.append("seller",items.seller)
    formdata.append("qut",items.qut)
    console.log(formdata)
    try {
      const{data}=await axios.post("/uploade",formdata)
      console.log(data)
      
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <>
    <div className='backendimage container'>

  
      <form onSubmit={handleSubmit(onsubmit)} className='container'>
        <label className='font-family text-light'>Enter you  Name:</label>
        <input type='name'className="form-control"placeholder='name'{...register("name")}/><br></br>
        <label className='font-family text-light'>Enter you  Price :</label>
        <input type='price'className="form-control"placeholder='price'{...register("price")}/><br></br>
        <label className='font-family text-light'>Enter you  Qut:</label>
        <input type='qut'className="form-control"placeholder='qut'{...register("qut")}/><br></br>
        <label className='font-family text-light'>Enter you  About:</label>
        <input type='about'className="form-control"placeholder='about'{...register("about")}/><br></br>
        <label className='font-family text-light'>Enter you  Stock:</label>
        <input type='stock'className="form-control"placeholder='stock'{...register("stock")}/><br></br>
        <label className='font-family text-light'>Enter you Seller:</label>
        <input type='seller'className="form-control text-success"placeholder='seller'{...register("selller")}/><br></br>

        <input type='file'placeholder='file' ref={inputvale}   onChange={Savefile}/><br></br><br></br>
        <button className='btn text-light bg-success'>register</button>
      </form>
        </div>
    </>
  )
}
export default Orderes