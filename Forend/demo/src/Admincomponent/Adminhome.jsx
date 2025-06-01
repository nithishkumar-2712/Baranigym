import React, { useEffect, useState } from 'react'
import './Admin.css'
import axios from '../config/axios'
import { useFethc } from '../UseFetch'
 function Adminhome() {

  const{data}=useFethc("/getitems")
  console.log(data)
  //    const[data,setData]=useState([])
  //  const Orderes=async()=>{
  //       try {
  //           const {data}= await axios("/getitems")
  //           if(data.success){
  //               setData(data.singleeitem)
  //           }
  //       } catch (error) {
  //           console.log(error)
  //       }
  //   }
  //   useEffect(()=>{
  //       Orderes()
  //   },[])
  return (
    <>
    <h1> Orderes</h1>
    <table className='container'>
      <thead>
  <tr>
    <th>s:no</th>
    <th>User Name</th>
    <th>user id</th>
    <th>Qut</th>
    <th>price</th>
    <th>produect name</th>

  </tr>
  </thead>
  <tbody>
  {data.singleeitem.map((items,index)=>
   <tr key={index+1}>
    {/* <td className='font-family font-weight' key={index+1}>{index+1}</td> */}
    <td className='font-family font-weight'>25</td>
    <td className='font-family font-weight'>{items.prodect._id}</td>
    <td className='font-family font-weight'>{items.prodect.qut}</td>
    <td className='font-family font-weight'>{items.prodect.price}</td>
    <td className='font-family font-weight'>{items.prodect.name}</td>
  </tr>
  )}
  </tbody>
   </table>
    </>
  )
}
export default Adminhome