import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  singleProduct: productReducer,
  cartItems: cartReducer,
});

export default rootReducer;
