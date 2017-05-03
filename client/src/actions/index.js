import axios from 'axios';
import {
  FETCH_PRODUCTS,
  SELECT_PRODUCT,
} from './types';

const ROOT_URL = 'http://localhost:5227/api';

export const fetchProducts = () => {
  const url = `${ROOT_URL}/products`;
  return (dispatch) => {
    axios.get(url)
      .then((response) => {
        const products = response.data;
        dispatch({
          type: FETCH_PRODUCTS,
          payload: products,
        });
      });
  };
};

export const selectProduct = (product) => {
  return {
    type: SELECT_PRODUCT,
    payload: product,
  };
};
