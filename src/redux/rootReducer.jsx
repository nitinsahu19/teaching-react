import { combineReducers } from 'redux';
import counterReducer from './Reducer/counterSlice';
import productReducer from './Reducer/productApi';

export const rootReducer = combineReducers({
  counter: counterReducer,
  products: productReducer,  
});
