import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addItemToCart, removeItemFromCart } from '../../state/actions/cartActions'

import PlusSign from './plusSign.svg'
import MinusSign from './minusSign.svg'

const CartDetail = ({cartData, addItemToCart, removeItemFromCart}) => {
  const cart = cartData.cart
  const [cartItems, setCartItems] = useState(cart)

  const reduceCartItemQuantity = (index) => {
    const { quantity, ...rest } = index;
    const withoutQuantity = rest;
    removeItemFromCart(withoutQuantity)
  }

  const increaseCartItemQuantity = (index) => {
    const { quantity, ...rest } = index;
    const withoutQuantity = rest;
    addItemToCart(withoutQuantity)
  }

  useEffect(() => {
    setCartItems(cart)
  }, [cart])

  return (
    <div className="cartDetail">
      <div className="cartDetail-container">
        {cartItems.map(
          (e) =>
            e.quantity > 0 && (
              <div key={cartItems.indexOf(e)} className="cart-item">
                <div className="cart-item-container">
                  <div className="cart-item-name-price-bundle">
                    <div className="cart-item-name">{e.name}</div>
                    <div className="cart-item-price">{'₺' + e.price}</div>
                  </div>
                  <div className="cart-item-quantity-bundle">
                    <img
                      onClick={() => reduceCartItemQuantity(e)}
                      src={MinusSign}
                      alt="Reduce Quantity"
                      className="hoverable"
                    />
                    <div className="cart-item-quantity">{e.quantity}</div>
                    <img
                      onClick={() => increaseCartItemQuantity(e)}
                      src={PlusSign}
                      alt="Add Quantity"
                      className="hoverable"
                    />
                  </div>
                </div>
                <div className="seperator"></div>
              </div>
            ),
        )}
        <div className="total-sum">
          <div className="total-sum-container">
            {
              cartItems.length === 0 ? "₺0" : "₺" + cartItems.map(e => e.price * e.quantity).reduce((a, b) => a + b, 0).toFixed(2)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

CartDetail.propTypes = {
  cartData: PropTypes.object.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  removeItemFromCart: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  cartData: state.cartData
})

export default connect(mapStateToProps, {addItemToCart, removeItemFromCart})(CartDetail)
