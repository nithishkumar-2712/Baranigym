import React, { useEffect, useState } from 'react'
import axios from '../config/axios'
import './Compoent.css'
 function Home() {
const[count,setcount]=useState([])

    const fache=async()=>{
        try {
            const {data}= await axios.get("/getproduect")
            if(data.success){
                setcount(data.getallproduect)
            }else{
                console.log(data.message)
            }
        } catch (error) {
            console.log(error)
            
        }
    }
    useEffect(()=>{
        fache()
    },[])
    const handleclick=async(id,price)=>{
        console.log(id)
        try {
            const {data}=await axios.post("/single",{id,price})
            console.log(data)
            if(data.success){
                
                console.log(data)
            }else{
                alert(data.message)
            }
        } catch (error) {
            console.log(error)     
        }
    }

  return (
    <>
    
       <div className='backendimage'>

      <div className='container'>
      <div className='row'>
        {count.map((item,index)=>
        <div key={index} className='col-12 col-md-6 col-lg-3 my-5'>
    <div className="card animate__animated animate__bounceInLeft custom-bounce" style={{width:"18"}}>
       <p>{item. _id}</p> 
          <img src={`http://localhost:3000${item.filename}`} className="card-img-top" width={250} height={200} alt="..."/>
          <div className="card-body ">
            <h4> s.no:{index+1}</h4>
         <h5 className="card-title text-truncate"> name:{item.name}</h5>
          <p className="card-text">price:${item.price}</p>
          <div className='ratings mt-auto'>
            <div className='rating-outer'>
            {/* <div className='rating-inner' style={{width:`${item.ratings/5*100}%`}}></div> */}
            </div>
          </div>
         <button className="btn btn-primary" onClick={()=>handleclick(item._id, item.price)}>Addtocart</button>
         {/* <p>{preshed?"already  purched":"go to purshed"}</p> */}
        </div>
      </div>  
  </div>)}
      </div>
    </div>
    </div>
    </>
  )
}
export default  Home