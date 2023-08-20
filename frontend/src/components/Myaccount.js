import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import "./Myaccount.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import jeans from '../assets/jeans.png'

const Myaccount = () => {

    const {id}=useParams();

    console.log("Id",id)

    const [productDetail,setProductDetal]=useState([])


    useEffect(()=>{
                axios.get(`http://localhost:3000/products/${id}`).
                then((res)=>{
                    console.log("data",res)
                    setProductDetal(res.data)
                })
    },[])




  return (
    <>
    <div className='wrapper'>
    <Sidebar/>

    <h1 style={{margin:"50px"}}>Gallary of Products</h1>

<div class="wrapperr">
  <div class="box">
    <div class="product">
      <span class="name">{productDetail.name}</span>
      <span class="name">Price : $ {productDetail.price}</span>
      <img className="productImg" src={jeans} />
     <span class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
    </div>
  </div>
 
</div>
    
 </div>

 


    


    

    </>
   
  )
}

export default Myaccount