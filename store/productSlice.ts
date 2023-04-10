import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export interface ProductState {
  products:Array<any>,
  loading:boolean
}
type productData = any;

const initialState = {
  products:[],
  loading:false
}as ProductState;

export const fetchProduct = createAsyncThunk(
  'products/fetchProduct',
  async (thunkAPI) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // const response = await axios.get("http://localhost:5000/product/getAllProducts");
    return response.data as productData[];
  }
)
export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload)
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
export const { addProduct, updateProduct } = productSlice.actions

export default productSlice.reducer