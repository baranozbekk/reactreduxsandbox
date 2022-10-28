import { ADD_ITEM_TO_CART } from '../_config/types'

const initialState = []

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      console.log('tık2', action.payload)
      return {
        state: [action.payload],
      }
    }
    default:
      return state
  }
}
