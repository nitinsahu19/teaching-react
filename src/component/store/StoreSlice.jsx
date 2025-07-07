import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slice/Counterslice'
export const store = configureStore({
    reducer:{
        counter:counterReducer,
    },
})