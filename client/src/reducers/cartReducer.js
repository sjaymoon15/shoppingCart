import { FETCH_CART_ITEMS } from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CART_ITEMS:
      return action.payload;
    default:
      return state;
  }
};
