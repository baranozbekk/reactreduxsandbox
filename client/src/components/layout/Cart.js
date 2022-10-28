import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import CartLogo from './basket.svg'
import CartDetail from './CartDetail'

const Cart = ({cartData}) => {
  const [cartOpen, setCartOpen] = useState(false)
  const cart = cartData.cart
  const [cartItems, setCartItems] = useState(cart)
  useEffect(() => {
    setCartItems(cart)
  }, [cart])
  return (
    <>
      <div id="cart" onClick={() => setCartOpen(!cartOpen)}>
        <div className="cart-container">
          <div className="cart-items">
            <div className="cart-logo">
              <img src={CartLogo} alt="Cart Logo" />
            </div>
            <div className="total-price">
              {
              cartItems.length === 0 ? "₺ 0" : "₺ " + cartItems.map(e => e.price * e.quantity).reduce((a, b) => a + b, 0).toFixed(2)
              }
            </div>
          </div>
        </div>
      </div>
      {cartOpen && <CartDetail />}
    </>
  )
}

Cart.propTypes = {
  cartData: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  cartData: state.cartData
})

export default connect(mapStateToProps)(Cart)
