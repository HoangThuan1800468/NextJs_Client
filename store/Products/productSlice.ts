import { createSlice } from '@reduxjs/toolkit'
import { fetchCreateNewProduct, fetchCreateOrder, fetchDeleteOrder, fetchHandleOrder, fetchOneProduct, fetchProduct, fetchUpdateInforProduct, fetchUpdateStatusProduct } from './productThunk';

export interface ProductState {
  products:Array<any>,
  loading:boolean,
  product:{},
  order:{}
}


const initialState = {
  products:[],
  loading:false,
  product:{},
  order:{}
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
      });
    // get one product
    builder
      .addCase(fetchOneProduct.pending,(state)=>{
        state.loading=true;
      })
      .addCase(fetchOneProduct.fulfilled,(state,{payload}) => {
        state.loading = false;
        state.product = payload;
      });
    // update status product
    builder
      .addCase(fetchUpdateStatusProduct.pending,(state)=>{
        state.loading=true;
      })
      .addCase(fetchUpdateStatusProduct.fulfilled,(state,{payload}) => {
        state.loading = false;
        state.product = payload;
      });
    // update infor product
    builder
      .addCase(fetchUpdateInforProduct.pending,(state)=>{
        state.loading=true;
      })
      .addCase(fetchUpdateInforProduct.fulfilled,(state,{payload}) => {
        state.loading = false;
        state.product = payload;
      });
    // Create new product
    builder
      .addCase(fetchCreateNewProduct.pending,(state)=>{
        state.loading=true;
      })
      .addCase(fetchCreateNewProduct.fulfilled,(state,{payload}) => {
        state.loading = false;
        state.product = payload;
      });
    // Create new order
    builder
      .addCase(fetchCreateOrder.pending,(state)=>{
        state.loading=true;
      })
      .addCase(fetchCreateOrder.fulfilled,(state,{payload}) => {
        state.loading = false;
        state.order = payload.data;
      });
    // Handle order
    builder
      .addCase(fetchHandleOrder.pending,(state)=>{
        state.loading=true;
      })
      .addCase(fetchHandleOrder.fulfilled,(state,{payload}) => {
        state.loading = false;
        state.order = payload.data;
      });
    // Handle order
    builder
      .addCase(fetchDeleteOrder.pending,(state)=>{
        state.loading=true;
      })
      .addCase(fetchDeleteOrder.fulfilled,(state) => {
        state.loading = false;
        state.order = {};
      });
  }
})

// Action creators are generated for each case reducer function
const {reducer,actions} = productSlice;
export const {addProduct} = actions;
export default reducer;
