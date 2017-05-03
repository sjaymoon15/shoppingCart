import {
  SELECT_PRODUCT,
  PRODUCT_ADDED_TO_CART,
  PRODUCT_REMOVED_FROM_CART,
} from '../actions/types';

const INITIAL_STATE = {
  id: null,
  name: null,
  price: null,
  image: null,
  description: null,
  available: null,
  checkedOut: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return action.payload;
    case PRODUCT_ADDED_TO_CART:
      return { ...state, available: false };
    case PRODUCT_REMOVED_FROM_CART:
      return { ...state, available: true };
    default:
      return state;
  }
};
