import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { brandUrl } from '../constants/constants';
import BrandItem from './BrandItem'
import "../styles/item.css"

export default function Brands() {

    const [brands,setBrands] = useState({});

    useEffect(()=>{
      getAllBrands();
    },[]);
  
    const getAllBrands=()=>{
      axios.get(`${brandUrl}/all`).then(
        (response)=>{
          console.log(response);
          setBrands(response.data);
        },(error)=>{
          console.log(error);
          console.log("Error");
        }
      )
    }

  return (
    <div className='wrapper'style={{marginTop: "80px"}}>
    {brands.length>0?brands.map((item)=>{return <BrandItem items={item}/>}):"No Brands Found"}
    </div>
  )
}
