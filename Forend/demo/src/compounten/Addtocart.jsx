import React, { useState,useEffect } from 'react'
import axios from '../config/axios'
import './Compoent.css'

 function Addtocart() {
const[fech,setFech]=useState([])
const[count,setCount]=useState(0)
const single=async()=>{
    try {
        const {data}= await axios.get("/getitems")
        console.log(data)
        if(data.success){
            setFech(data.singleeitem)
        }else{
          console.log(data.message)
        }
    } catch (error) {
        console.log(error)
        
    }
}
useEffect(()=>{
    single()
   
},[])
const updateQuantity= async (item,type)=>{

  try {
    const {data} = await axios.put("/updateCart",{type,id: item._id});
    if(data.success){
      single();
    }
  } catch (error) {
    console.log(error)
  }
}

const handlecliick=async(id)=>{
console.log(id)
  try {
    const {data}=await axios.delete(`/delete/${id}`)
    console.log(data)
    if(data.success){
      alert("successfully delete items")
      single()
    }else{
      console.log(data.error)
    }
  } catch (error) {
    console.log(error)
    
  }

}
const handleclick=async(id)=>{
  try {
    const{data}=await axios.post(`/orders/${id}`)
    if(data.success){
      alert("successfully going")
    }else{
      alert("unsuccessfully going")
    }
  } catch (error) {
    console.log(error)
  }
}
  return (
    <>
    <div  className="card-body  container">
       {/* <p>{item.prodect._id}</p>  */}
            <h4> Oreder Summary</h4>
         {/* <h5 className="card-title text-truncate"> name:</h5>/ */}
          <p className="card-text">subtotal:</p>
          <p className="card-text">est:total:</p>
          <div className='ratings mt-auto'>
            <button  className="btn text-light bg-dark" >Order place</button>
            </div>
            </div>
     
    
      <div className='container'>
      <div className='row'>
        {fech.map((item,index)=>
        <div key={index}  className='col-12 col-md-6 col-lg-3 my-5'>
      <div className="card animate__animated animate__bounceInLeft custom-bounce"style={{width:"18"}}>

          <div  className="card-body ">

            <h4> s.no:{index+1}</h4>
         <h5 className="card-title text-truncate"> name:{item.prodect.name}</h5>
          <p className="card-text">price:${item.prodect.price}</p>
          <p className="card-text">Stock:{item.prodect.stock}</p>
          <div className='ratings mt-auto'>
            <button disabled={item.quantity >= item.prodect.stock} onClick={()=>updateQuantity(item,"increment")}>+</button>
            <span>{item?.quantity}</span>
            <button disabled={item.quantity <= 1} onClick={()=>updateQuantity(item,"decrement")}>-</button>
            <div className='rating-outer'>
            {/* <div className='rating-inner' style={{width:`${item.ratings/5*100}%`}}></div> */}
            </div>
          </div>
         <button className="btn btn-success"disabled={item.prodect.stock==0} onClick={()=>handleclick(item._id)}>buy</button><br></br>
         <button className="btn btn-danger" onClick={()=>handlecliick(item._id)}>delete</button>
         {/* <p>{preshed?"already  purched":"go to purshed"}</p> */}
        </div>
      </div>  
  </div>)}
      </div>
    </div>
    
    </>
  )
}
export default Addtocart