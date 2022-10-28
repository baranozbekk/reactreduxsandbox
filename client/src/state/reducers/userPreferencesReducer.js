import {
  CHANGE_SELECTED_ITEM_TYPE,
  CHANGE_SORTING_TYPE,
  CHANGE_SELECTED_BRANDS,
  CHANGE_SELECTED_TAGS,
} from '../_config/types'

const initialState = {
  selectedItemType: 'mug',
  selectedSortingType: 'pricelowtohigh',
  selectedBrands: [],
  selectedTags: [],
}

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_ITEM_TYPE: {
      return {
        ...state,
        selectedItemType: action.payload,
      }
    }
    case CHANGE_SORTING_TYPE: {
      return {
        ...state,
        selectedSortingType: action.payload,
      }
    }
    case CHANGE_SELECTED_BRANDS: {
      return {
        ...state,
        selectedBrands: action.payload,
      }
    }
    case CHANGE_SELECTED_TAGS: {
      return {
        ...state,
        selectedTags: action.payload,
      }
    }
    default:
      return state
  }
}
