import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  singleProduct: productReducer,
});

export default rootReducer;
