import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: "Counter",
    initialState: { count: 0 },
    reducers: {
        inCriment: (state) => {
            state.count += 1
        },
        deCriment: (state) => {
            state.count -= 1
        },
        reset: (state) => {
            state.count = 0
        }
    }
})

export const { inCriment, deCriment, reset } = counterSlice.actions;
export default counterSlice.reducer;