import {
  CHANGE_SELECTED_ITEM_TYPE,
  CHANGE_SORTING_TYPE,
  CHANGE_SELECTED_BRANDS,
  CHANGE_SELECTED_TAGS,
} from '../_config/types'

export const changeSelectedItemType = (itemType) => (dispatch) => {
  dispatch({
    type: CHANGE_SELECTED_ITEM_TYPE,
    payload: itemType,
  })
}

export const changeSortingType = (sortingType) => (dispatch) => {
  dispatch({
    type: CHANGE_SORTING_TYPE,
    payload: sortingType,
  })
}

export const changeSelectedBrands = (selectedBrands) => (dispatch) => {
  dispatch({
    type: CHANGE_SELECTED_BRANDS,
    payload: selectedBrands,
  })
}

export const changeSelectedTags = (selectedTags) => (dispatch) => {
  dispatch({
    type: CHANGE_SELECTED_BRANDS,
    payload: CHANGE_SELECTED_TAGS,
  })
}
