import axios from 'axios';
import {
  FETCH_PRODUCTS,
  SELECT_PRODUCT,
  PRODUCT_ADDED_TO_CART,
  PRODUCT_REMOVED_FROM_CART,
  ITEM_REMOVED_FROM_CART,
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

export const addItemToCart = (product) => {
  const cartUrl = `${ROOT_URL}/cart`;
  const productUrl = `${ROOT_URL}/products`;
  return (dispatch) => {
    axios.put(productUrl, product)
      .then((response) => {
        const updatedProduct = response.data;
        updatedProduct.available = false;
        axios.post(cartUrl, updatedProduct)
        .then((response) => {
          const newCartItem = response.data;
          dispatch({
            type: PRODUCT_ADDED_TO_CART,
            payload: newCartItem,
          });
        });
      });
  };
};

export const removeItemFromCart = (cartItem) => {
  const cartUrl = `${ROOT_URL}/cart/${cartItem._id}`;
  const productUrl = `${ROOT_URL}/products`;
  return (dispatch) => {
    axios.put(productUrl, cartItem)
    .then((response) => {
      const updatedProduct = response.data;
      updatedProduct.available = true;
      dispatch({
        type: PRODUCT_REMOVED_FROM_CART,
        payload: updatedProduct,
      });
    });
    axios.delete(cartUrl)
      .then(() => {
        dispatch({
          type: ITEM_REMOVED_FROM_CART,
          payload: cartItem,
        });
      });
  };
};
