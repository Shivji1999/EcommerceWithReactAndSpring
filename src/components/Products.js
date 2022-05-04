import React,  {  useEffect, useState } from 'react'

import "../styles/item.css"
import axios from 'axios';
import Item from './Item'
import { prodUrl } from '../constants/constants';

function Products() {

    const [products,setProduct] = useState({});

    useEffect(()=>{
      getAllProducts();
    },[]);
  
    const getAllProducts=()=>{
      axios.get(`${prodUrl}/all`).then(
        (response)=>{
          console.log(response);
          setProduct(response.data);
        },(error)=>{
          console.log(error);
          console.log("Error");
        }
      )
    }

  return (
    <div className='wrapper' style={{marginTop: "80px"}}>
    {products.length>0?products.map((item)=>{return <Item items={item}/>}):"No Products Found"}
    </div>
  )
}

export default Products
