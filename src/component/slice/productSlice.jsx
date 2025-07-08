import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name:"apiproduct",
    initialState :{
        product:[],
    },
    reducers:{
        fetchingData : (state,action)=>{
            state.product = action.payload
        }
    }

})
export const {fetchingData} = productSlice.actions;

export default productSlice.reducer