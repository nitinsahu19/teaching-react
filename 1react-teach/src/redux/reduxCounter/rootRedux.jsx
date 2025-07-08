import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from './counterReducer' 
import dataReducer from './api'
import productReducer from './NormalApiRedux'
export const rootRedux = combineReducers({
    counter: counterReducer, 
    data : dataReducer,
    products : productReducer
})