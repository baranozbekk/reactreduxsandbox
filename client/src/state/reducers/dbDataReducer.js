import {
  FETCH_ITEMS_DATA,
  FETCH_ITEMS_DATA_ERROR,
  FETCH_COMPANIES_DATA,
  FETCH_COMPANIES_DATA_ERROR,
  SET_DB_FETCH_LOADING_TRUE,
  SET_DB_FETCH_LOADING_FALSE,
} from '../_config/types'

const initialState = {
  items: null,
  companies: [],
  fetchError: false,
  error: [],
  loading: true,
}

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_DATA: {
      return {
        ...state,
        items: action.payload,
        loading: false,
        fetchError: false,
      }
    }
    case FETCH_ITEMS_DATA_ERROR: {
      return {
        ...state,
        fetchError: true,
        error: [...state.error, action.payload],
      }
    }
    case FETCH_COMPANIES_DATA: {
      return {
        ...state,
        companies: action.payload,
        loading: false,
        fetchError: false,
      }
    }
    case FETCH_COMPANIES_DATA_ERROR: {
      return {
        ...state,
        fetchError: true,
        error: [...state.error, action.payload],
      }
    }
    case SET_DB_FETCH_LOADING_TRUE: {
      return {
        ...state,
        loading: true,
      }
    }
    case SET_DB_FETCH_LOADING_FALSE: {
      return {
        ...state,
        loading: false,
      }
    }
    default:
      return state
  }
}
