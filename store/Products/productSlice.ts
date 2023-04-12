import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { fetchProduct } from './productThunk';

export interface ProductState {
  products:Array<any>,
  loading:boolean
}


const initialState = {
  products:[],
  loading:false
}as ProductState;


export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    // removeProduct: (state,action) => {
    //   const removeProductId = action.payload;
    //   return state.products.filter(product => product.id !== removeProductId);
    // },
    updateProduct: (state, action) => {
      const newProduct = action.payload;
      const productIndex = state.products.findIndex(product =>product.id === newProduct.id);
      if(productIndex >= 0){
        state.products[productIndex] = newProduct;
      }
    },
  },
  extraReducers: (builder) =>{
    builder.addCase(fetchProduct.pending,(state)=>{
      state.loading=true;
    });
    builder.addCase(fetchProduct.fulfilled,(state,{payload}) => {
      state.loading = false;
      state.products = payload;
    })
  }
})

// Action creators are generated for each case reducer function
const {reducer,actions} = productSlice;
export const {addProduct} = actions;
export default reducer;
