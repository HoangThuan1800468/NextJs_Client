import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { fetchOneProduct, fetchProduct } from './productThunk';

export interface ProductState {
  products:Array<any>,
  loading:boolean,
  product:{}
}


const initialState = {
  products:[],
  loading:false,
  product:{}
}as ProductState;


export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const newProduct = action.payload;
      const productIndex = state.products.findIndex(product =>product.id === newProduct.id);
      if(productIndex >= 0){
        state.products[productIndex] = newProduct;
      }
    },
  },
  extraReducers: (builder) =>{
    // get all product
    builder
      .addCase(fetchProduct.pending,(state)=>{
        state.loading=true;
      })
      .addCase(fetchProduct.fulfilled,(state,{payload}) => {
        state.loading = false;
        state.products = payload;
      })
    // get one product
    builder
      .addCase(fetchOneProduct.pending,(state)=>{
        state.loading=true;
      })
      .addCase(fetchOneProduct.fulfilled,(state,{payload}) => {
        state.loading = false;
        state.product = payload;
      })
  }
})

// Action creators are generated for each case reducer function
const {reducer,actions} = productSlice;
export const {addProduct} = actions;
export default reducer;
