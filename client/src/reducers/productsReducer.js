import _ from 'lodash';
import {
  FETCH_PRODUCTS,
  PRODUCT_ADDED_TO_CART,
  PRODUCT_REMOVED_FROM_CART,
} from '../actions/types';

const updateStateForAddRemove = (state, updatedProduct) => {
  const index = _.indexOf(state, _.find(state, { id: updatedProduct.id }));
  const lastSliceIndex = state.length + 1;
  return [...state.slice(0, index), updatedProduct, ...state.slice(index + 1, lastSliceIndex)];
};

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;
    case PRODUCT_ADDED_TO_CART:
      return updateStateForAddRemove(state, action.payload);
    case PRODUCT_REMOVED_FROM_CART:
      return updateStateForAddRemove(state, action.payload);
    default:
      return state;
  }
};
