import React from "react";
import './product.css';
import data from '../Object.js'
function Product() {
  return (
    <div className="parent" >
   {
    data.map((ele)=>{
      return(
       
        <div className='cart-box'>
        <div className="text">product name: {ele.name}</div>
        <div className="text" >product color: {ele.color}</div>


        </div>
    
      )
    })
   }
     </div>
  )
}

export default Product;
