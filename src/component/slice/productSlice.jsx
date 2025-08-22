import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "apiproduct",
    initialState: {
        product: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchingData: (state, action) => {
            state.product = action.payload
            state.loading = false
        },
        loadingData: (state) => {
            state.loading = true
        },
        errorData: (state) => {
            state.error = 'something went wrong'
        }
    }
})
export const { fetchingData, loadingData, errorData } = productSlice.actions;
export default productSlice.reducer