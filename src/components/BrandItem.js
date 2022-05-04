import React from 'react'
import "../styles/item.css"

function BrandItem({items}) {
  return (
    <div className='bcard'>
      <div className='itittle'>{items.name}</div>
    </div>
  )
}

export default BrandItem
