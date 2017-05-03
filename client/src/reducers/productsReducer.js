import _ from 'lodash';
import {
  FETCH_PRODUCTS,
  PRODUCT_ADDED_TO_CART,
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;
    case PRODUCT_ADDED_TO_CART:
      const updatedProduct = action.payload;
      const index = _.indexOf(state, _.find(state, { id: updatedProduct.id }));
      const lastSliceIndex = state.length + 1;
      return [...state.slice(0, index), updatedProduct, ...state.slice(index + 1, lastSliceIndex)];
    default:
      return state;
  }
};
