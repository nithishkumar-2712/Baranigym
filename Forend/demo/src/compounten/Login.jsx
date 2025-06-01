import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import { Link } from 'react-router-dom'
import axios from '../config/axios'
import './Compoent.css'
import "../layout/Navebar.css"
 function Login() {
  const[count,setcount]=useState(true)
  const{register,handleSubmit}=useForm()
  const handleclick=()=>{
    setcount(false)
    // console.log(count)
  }
  const onSubbmit=async(detial)=>{
    try {
        const{data}=await axios.post("/login",detial)
        if(data.success){
            alert(data.message)
        }else{
            alert(data.message)
        }
    } catch (error) {
        console.log(error)
    }

  }
const onSubmit=async(send)=>{
    console.log(send)
    try {
       const{data}= await axios.post("/sumbit",send)
       console.log(data)
        if(data.success){
            alert("successfully register")
        }else{
            alert(data.message)
        }
    } catch (error) {
        console.log(error)
    }

}

const handlecliick=async()=>{
    const logout=confirm("are you sharow")
    if(logout==1){
       
 
    try {
        const {data}=await axios.post("/logout")
        if(data.success){
            alert("logout")
        }
    } catch (error) {
        console.log(error)
    }
}
}
  return (
    <>
    <div className='container'>

   
    <div className='backendimage'>
       {count? ( 
        <><form onSubmit={handleSubmit(onSubmit)} className='container'>
            <label className='font-family text-light font-weight'>Enter you Name:</label><input className='form-control' type='name' placeholder='name' {...register("name")}/><br></br>
            <label className='font-family text-light font-weight'>Enter you Email:</label><input className='form-control' type='email' placeholder='email' {...register("email")}/><br></br>
            <label className='font-family text-light font-weight'>Enter you Password:</label><input className='form-control' type='password' placeholder='password' {...register("password")}/><br></br>
            <label className='font-family text-light font-weight'>Enter you Number:</label><input className='form-control' type='number' placeholder='number' {...register("number")}/><br></br>
            <label className='font-family text-light font-weight'>Enter you Age:</label><input className='form-control' type='age' placeholder='number' {...register("age")}/><br></br>
            {/* <input className='form-control' type='color' placeholder='color'/> */}
            <button className='btn bg-dark text-light'>register</button><br></br><br></br>
        <Link to="/login"><button className='btn text-light bg-success' onClick={handleclick}>login</button></Link>
        </form>
        </>):(
            <>
        <form onSubmit={handleSubmit(onSubbmit)} className='container'>
        <label className='font-family text-light'> Enter you Pssword:</label><input  className="form-control" type='password' placeholder='password' {...register("password")}/><br></br>
        <label className='font-family text-light'> Enter you email:</label><input  className="form-control" type='email' placeholder='email' {...register("email")}/><br></br>
        <button className='btn text-light bg-success'>login</button><br></br><br></br>
        <button className='btn text-light  bg-danger' onClick={handlecliick}>logout</button>
        </form>
        </>
        )}
        {/* LOG IN FORM */}
      </div>
       </div>
    </>
  )
}
export default Login