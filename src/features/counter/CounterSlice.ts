import { createSlice } from '@reduxjs/toolkit';


const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,

    },
    reducers: {
        increment: (state) => {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        reset: (state) => {
            state.count = 0
        }
    },
    // extraReducers:(builder)=>{
    //     builder.addCase
    // }
});

export default counterSlice;

export const { increment, decrement, reset } = counterSlice.actions