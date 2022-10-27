import React, { useState } from 'react'

import CartLogo from './basket.svg'
import CartDetail from './CartDetail'

export default function Cart() {
  const [cartOpen, setCartOpen] = useState(false)
  return (
    <>
      <div id="cart" onClick={() => setCartOpen(!cartOpen)}>
        <div className="cart-container">
          <div className="cart-items">
            <div className="cart-logo">
              <img src={CartLogo} alt="Cart Logo" />
            </div>
            <div className="total-price">₺ 39,97</div>
          </div>
        </div>
      </div>
      {cartOpen && <CartDetail />}
    </>
  )
}
