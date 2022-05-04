import React from 'react'
import Brands from './Brands';
import ImageSlider from './Carousel/ImageSlider'
import { SliderData } from './Carousel/SliderData';
import Description from './Description';
import Products from './Products';

function Home() {



  return (
    <>
    <div style={{marginTop: 40}}>
    <ImageSlider slides={SliderData} />
    </div>
    <div style={{fontSize: 32, fontWeight: 1500}}>Brands</div>
    <Brands/>
    <div style={{fontSize: 32, fontWeight: 1500, marginTop: "80px"}}>Trending Products</div>
    <Products/>
    {/* <Description id={1}/> */}
    </>
  )
}

export default Home
