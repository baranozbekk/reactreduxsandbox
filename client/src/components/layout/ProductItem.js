import React from 'react'

import MugImage from './mug.jpeg'
import ShirtImage from './shirt.png'

export default function ProductItem({ price, name, itemType }) {
  const addItemToCart = () => {
    alert('ANAN')
  }
  return (
    <div className="product-item">
      <div className="product-item-container">
        <div className="product-item-image-container">
          <img
            src={itemType === 'shirt' ? ShirtImage : MugImage}
            alt="Product"
            className="product-item-image"
          />
        </div>
        <div className="product-price">₺ {price}</div>
        <div className="product-title">{name}</div>
        <div className="add-button" onClick={addItemToCart}>
          <div className="add-button-text">Add</div>
        </div>
      </div>
    </div>
  )
}
