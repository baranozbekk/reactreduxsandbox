import { ADD_ITEM_TO_CART, REMOVE_ITEM_TO_CART } from '../_config/types'

export const addItemToCart = (item) => (dispatch) => {
  dispatch({
    type: ADD_ITEM_TO_CART,
    payload: item,
  })
}

export const removeItemFromCart = (item) => (dispatch) => {
  dispatch({
    type: REMOVE_ITEM_TO_CART,
    payload: item,
  })
}
