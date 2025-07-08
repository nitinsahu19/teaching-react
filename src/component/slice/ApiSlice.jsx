import {createSlice,createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts  = createAsyncThunk('products/fetchProducts' , async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
})

const productSlice = createSlice({
    name:"product",
    initialState:{
        products:[],
        loading:false,
        error:null,
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled,(state,actions)=>{
            state.loading = false;
            state.products = actions.payload;

        })
        .addCase(fetchProducts.rejected,(state)=>{
            state.loading = false;
            state.error = "something went wrong";
        })
    }
})
export default productSlice.reducer;