import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/item.css"

function Item({items}) {
  const navigate=useNavigate();

  useEffect(
    ()=>{
      viewDescription(1)
    },[])

  const viewDescription=()=>{
    // navigate("/description", {state: {id:{key}}})
    console.log("clicked");
  }
  return (
    <>
      <div className='card'>
        <div className='cardbody'>
            <img className='iimg' src={items.img} alt='Loading'/>
            <h2 className='ititle'>{`${items.brand} ${items.name}`}</h2>
            <button className='btn' onClick={viewDescription()}>View Product</button>
        </div>
      </div>
    </>
  )
}

export default Item
