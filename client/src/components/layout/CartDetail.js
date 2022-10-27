import React, { useState, useEffect } from 'react'

import PlusSign from './plusSign.svg'
import MinusSign from './minusSign.svg'

export default function CartDetail() {
  const [cartItems, setCartItems] = useState([
    { name: 'Example Product1', price: 15.99, quantity: 3, key: 1 },
    { name: 'Example Product2', price: 15, quantity: 1, key: 2 },
    { name: 'Example Product3', price: 15, quantity: 1, key: 3 },
  ])

  const reduceCartItemQuantity = (index) => {
    const nextCartItems = cartItems.map((cartItem, i) => {
      if (i === cartItems.indexOf(index)) {
        cartItem.quantity = cartItem.quantity - 1
        return cartItem
      } else {
        return cartItem
      }
    })
    setCartItems(nextCartItems)
  }

  const increaseCartItemQuantity = (index) => {
    const nextCartItems = cartItems.map((cartItem, i) => {
      if (i === cartItems.indexOf(index)) {
        cartItem.quantity = cartItem.quantity + 1
        return cartItem
      } else {
        return cartItem
      }
    })
    setCartItems(nextCartItems)
  }

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
            {'₺' +
              cartItems
                .map((item) => item.price * item.quantity)
                .reduce((a, b) => a + b, 0)
                .toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  )
}
