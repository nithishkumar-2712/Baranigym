import React, { useEffect, useState } from 'react'
import axios from './config/axios'
 export const useFethc=(url)=>{
    const[data,setData]=useState({})
   const Orderes=async()=>{
        try {
            const {data}= await axios(url)
            if(data.success){
                setData(data)
            }else{
                console.log(data.error)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        Orderes()
    },[])
    return{data}
}
