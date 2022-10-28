import { ADD_ITEM_TO_CART } from '../_config/types'

export const addItemToCart = (item) => (dispatch) => {
  dispatch({
    type: ADD_ITEM_TO_CART,
    payload: item,
  })
}
