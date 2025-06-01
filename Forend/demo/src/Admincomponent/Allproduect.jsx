
import React, { useEffect, useState } from 'react'
import axios from '../config/axios'
import './Admin.css'
function Allproduect() {
 const[count,setcount]=useState([])
 const[edit,setEdit]=useState(null)
 const[formdata,setFormdata]=useState({
    name:"",
    stock:""
 })
  const produect=async()=>{
    try {
      const{data}=await axios.get("/getproduect")
      // console.log(data)
      if(data.success){
        setcount(data.getallproduect)
      }else{
        console.log(data.error)
      }
      
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(()=>{
produect()
  },[])
  const handleclick=async(id)=>{
    console.log(id)
    try {
      const{data}=await axios.delete(`/deletproduect/${id}`)
      if(data.success){
        alert("sucessfull this produect delete")
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleEdit=(item)=>{
    setEdit(item._id)
    setFormdata({
     " name":item.name,
     " stock":item.stock
    })
  }
  const StockEdit=()=>{
    setFormdata(change.current.stock)
  }
  const SaveName=()=>{
     setFormdata(change.current.name)
  }
  
  return (
    <>
     {/* all produect show the tablecollam */}
     
<h2>Example Table</h2>

  {/* {count.length>0?   */}
<table className='container'>
       <thead>
  <tr>
    <th>s:no</th>
    <th>Name</th>
    <th>price</th>
    <th className='hoverr text-dark'>stock</th>
    <th>seller</th>
    <th>edit</th>
    <th>delete</th>
  </tr>
  </thead>
   <tbody>
  {count.map((item,index)=>

  <tr className=' hover' key={index}>
    <td className='text-dark font-family font-weight'>{index+1}</td>
    <td className='text-success font-family font-weight'>{edit===item._id?
    (
      <input ref={change} onChange={SaveName}/>
    ):
    (item.name)
    }</td>

    <td className='text-blue font-family font-weight'>{item.price}</td>

    <td className='hoverr text-blue font-family font-weight'>{
      edit===item._id?(<input ref={change} onChange={StockEdit}/>)
    :(item.stock)
    }</td>

    <td className='text-danger font-family font-weight'>{item.seller}</td>

    <td>{
      edit===item._id?
      (
        <>
        <button>updatae</button>
       
        </>
      )
      :
      ( 
        <>
      <button className='btn bg-dark text-light' onClick={()=>handleEdit(item)}>edit</button>
   
    </>)}
     </td>
     <td>{
      edit===item._id?(
        <>
         <button>ncellce</button>
        </>
      ):(
        <>
         <button className='btn bg-dark text-light'onClick={()=>handleclick(item._id)}>delete</button>
        </>
      )}

     </td>

  </tr>
  )}
</tbody>
</table>
{/* :<p> empty produect</p>} */}

    </>
  )
}
export default Allproduect