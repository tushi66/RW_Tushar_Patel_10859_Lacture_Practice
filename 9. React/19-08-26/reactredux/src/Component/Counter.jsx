import {  configureStore , createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
};

const counterSlice = createSlice({

    name: "counter",

    initialState: initialState,
    
    reducers:{
        increment:(state) =>{
            state.count += 1
        },
        decrement:(state) =>{
            state.count -= 1
        },

        incrementBy10:(state) =>{
            state.count += 10
        },

        decrementBy10:(state) =>{
            state.count -= 10
        },
        reset:(state) =>{
            state.count = 0
        }
    }

})

export const {increment, decrement, incrementBy10 , decrementBy10 , reset} = counterSlice.actions


export const store = configureStore({
    reducer:{
        counter:counterSlice.reducer
    }
})