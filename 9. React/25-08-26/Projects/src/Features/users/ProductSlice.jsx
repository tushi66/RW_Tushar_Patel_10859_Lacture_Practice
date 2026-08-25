import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
    
    "products/fetchProducts",
    async() => {
        const res = await axios.get("https://dummyjson.com/products")

        return res.data.products
    }
)

const productsSlice = createSlice({
    name:"products",
    initialState:{
        data:[],
        status:"idle",
        error:null

    },
    reducers:{
        resetProducts(state) {
            state.data = [];
            state.status = "idle"
        }
    },
    extraReducers:(builder) => {
        builder

        .addCase(fetchProducts.pending , (state) => {
            state.status = "loading"
        })

        .addCase(fetchProducts.fulfilled , (state , action) => {
            state.status= "success",
            state.data = action.payload
        })

        .addCase(fetchProducts.rejected , (state , action) => {
            state.status = "failed",
            state.error = action.error.message
        })
    }
})

export const { resetProducts  } = productsSlice.actions


export const store = configureStore({
    reducer:productsSlice.reducer
})