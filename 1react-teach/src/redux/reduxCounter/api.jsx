import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchApi = createAsyncThunk('products/fetchProducts', async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data =  await res.json()
    return data
})


const productApi = createSlice({
    name: "Products",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    // reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchApi.pending, (state) =>{
            state.loading = true 
            state.error = null
        })
        .addCase(fetchApi.fulfilled , (state , action) =>{
            state.loading = false,
            state.data = action.payload
        })
        .addCase(fetchApi.rejected , (state) =>{
            state.loading = false
            state.error = "Api Failed"
        })
    }
})


export default productApi.reducer;
