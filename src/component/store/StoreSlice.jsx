import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slice/Counterslice'
import productReducer from '../slice/ApiSlice'
import apidataReducer from '../slice/productSlice'
export const store = configureStore({
    reducer:{
        counter:counterReducer,
        product:productReducer,
        apiProduct:apidataReducer,

    },
})