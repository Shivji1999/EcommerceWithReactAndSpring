import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { prodUrl } from '../constants/constants';
import "../styles/description.css"

export default function Description() {
const {state}= useNavigate();
    const [product, setProduct]= useState({});

    console.log(state)

    useEffect(
        ()=>{
            getProductDesc();
        },[]
    )

    const getProductDesc=()=>{
        axios.get(`${prodUrl}/product/${state.id}`).then(
            (response)=>{
                setProduct(response.data);
                console.log(product);
                console.log("Success");
                console.log(`${prodUrl}/product/${state.id}`)
            },(error)=>{
                console.log(error);
                console.log("Error");
                console.log(`${prodUrl}/product/${state.id}`)
            }
        )
    }


  return (
    <div className='container'>
        <div className='imgHolder'>
            <img src={product.img} alt='product Image' className='descImg'/>
        </div>
        <div className='detailsHolder'>
            <div className='descTitle'>{product.brand} {product.name}</div>
            <table className='descPrice'>
                <tr>
                    <td></td>
                    <td>Rs. {product.price}</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <div className='description'>{product.desc}</div>
            <button className='btnBuy'>Buy Now</button>
        </div>
    </div>
  )
}
