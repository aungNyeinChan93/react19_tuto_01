import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTest = createAsyncThunk('counter/fetchTest', async () => {
    const response = await fetch('https://dummyjson.com/products');
    const { products } = await response.json();
    return products;
})


const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        products: []
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
    extraReducers: (builder) => {
        builder.addCase(fetchTest.fulfilled, (state, action) => {
            state.products = action.payload;
        })
    }
});

export default counterSlice;

export const { increment, decrement, reset } = counterSlice.actions