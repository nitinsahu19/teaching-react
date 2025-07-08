import { createSlice } from "@reduxjs/toolkit";

const prodcutSlice = createSlice({
    name: "Product",
    initialState: {
        product: []
    },

    reducers: {
        productData: (state, action) => {
            state.product = action.payload
        }
    }
})

export const {productData} = prodcutSlice.actions;
export default prodcutSlice.reducer
