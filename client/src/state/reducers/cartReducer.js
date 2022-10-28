import { ADD_ITEM_TO_CART, REMOVE_ITEM_TO_CART } from '../_config/types'

const initialState = {
  cart: [],
}

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      var itemWithQuantity = []
      itemWithQuantity = action.payload
      if(state.cart.length === 0) {
        itemWithQuantity.quantity = 1
        return {
          ...state,
          cart: [...state.cart, itemWithQuantity],
        }
      } 
      if(state.cart.length > 0 && !state.cart.some(e => e.slug === itemWithQuantity.slug)) {
        itemWithQuantity.quantity = 1
        return {
          ...state,
          cart: [...state.cart, itemWithQuantity],
        }
      } 
      if(state.cart.length > 0 && state.cart.some(e => e.slug === itemWithQuantity.slug)) {
        const prevItem = state.cart.find(e => e.slug === itemWithQuantity.slug)
        prevItem.quantity += 1
        state.cart[state.cart.indexOf(prevItem)] = prevItem
        return {
          ...state,
          cart: [...state.cart],
        }
      }
      else {
        return {
          ...state,
        }
      }
    }
    case REMOVE_ITEM_TO_CART: {
      var itemWithQuantity2 = []
      itemWithQuantity2 = action.payload
      if(state.cart.length === 0) {
        return {
          ...state,
        }
      } 
      if(state.cart.length > 0 && !state.cart.some(e => e.slug === itemWithQuantity2.slug)) {
        return {
          ...state,
        }
      } 
      if(state.cart.length > 0 && state.cart.some(e => e.slug === itemWithQuantity2.slug)) {
        const prevItem = state.cart.find(e => e.slug === itemWithQuantity2.slug)
        prevItem.quantity -= 1
        if (prevItem.quantity === 0) {
          state.cart.splice(state.cart.indexOf(prevItem), 1)
        }
        state.cart[state.cart.indexOf(prevItem)] = prevItem
        return {
          ...state,
          cart: [...state.cart],
        }
      }
      else {
        return {
          ...state,
        }
      }
      // return {
      //   ...state,
      //   cart: [...state.cart, action.payload]
      // }
    }
    default:
      return state
  }
}
