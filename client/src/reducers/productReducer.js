import { SELECT_PRODUCT } from '../actions/types';

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
    default:
      return state;
  }
};
