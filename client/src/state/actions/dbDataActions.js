import {
  FETCH_ITEMS_DATA,
  FETCH_ITEMS_DATA_ERROR,
  FETCH_COMPANIES_DATA,
  FETCH_COMPANIES_DATA_ERROR,
  SET_DB_FETCH_LOADING_TRUE,
  SET_DB_FETCH_LOADING_FALSE,
} from '../_config/types'

import axios from 'axios'

export const fetchItemsData = () => async (dispatch) => {
  try {
    setLoadingTrue()
    const res = await axios.get('/items')
    dispatch({
      type: FETCH_ITEMS_DATA,
      payload: res.data,
    })
  } catch (error) {
    dispatch({
      type: FETCH_ITEMS_DATA_ERROR,
      payload: error.response.data,
    })
  }
}

export const fetchCompaniesData = () => async (dispatch) => {
  try {
    setLoadingTrue()
    const res = await axios.get('/companies')
    dispatch({
      type: FETCH_COMPANIES_DATA,
      payload: res.data,
    })
  } catch (error) {
    dispatch({
      type: FETCH_COMPANIES_DATA_ERROR,
      payload: error.response.data,
    })
  }
}

export const setLoadingFalse = () => {
  return {
    type: SET_DB_FETCH_LOADING_FALSE,
  }
}

export const setLoadingTrue = () => {
  return {
    type: SET_DB_FETCH_LOADING_TRUE,
  }
}
