import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import MugImage from './mug.jpeg'
import ShirtImage from './shirt.png'

import { addItemToCart } from '../../state/actions/cartActions'

const ProductItem = ({ item, addItemToCart }) => {
  const { price, name, itemType } = item
  const clickHandler = () => {
    console.log('baban')
    addItemToCart(item)
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
        <div className="add-button" onClick={clickHandler}>
          <div className="add-button-text">Add</div>
        </div>
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  addItemToCart: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

export default connect(mapStateToProps, { addItemToCart })(ProductItem)
