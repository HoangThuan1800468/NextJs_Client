import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateNewOrder, CreateNewProduct, DeleteOrder, GetOneOrder, HandleOrder, getAllProduct, getOneProduct, searchProduct, searchTagProduct, updateInforProduct, updateStatusProduct } from "./productService";

type productData = any;
// get all product
export const fetchProduct = createAsyncThunk(
    'products/fetchProduct',
    async (thunkAPI) => {
      const response = await getAllProduct();
      return response as productData[];
    }
)
// search product
export const fetchSearchProduct = createAsyncThunk(
  'products/fetchSearchProduct',
  async (string:string,thunkAPI) => {
    try{
      const response = await searchProduct(string);
      return response as productData[];
    }catch (error: any) {
      const err = thunkAPI.rejectWithValue(error.response.data.message);
      window.alert([`${err.payload}`]);
      return err;
    }
  }
)
// search tag product
export const fetchSearchTagProduct = createAsyncThunk(
  'products/fetchSearchTagProduct',
  async (tag:string,thunkAPI) => {
    try{
      const response = await searchTagProduct(tag);
      return response as productData[];
    }catch (error: any) {
      const err = thunkAPI.rejectWithValue(error.response.data.message);
      window.alert([`${err.payload}`]);
      return err;
    }
  }
)
// get one product

export const fetchOneProduct = createAsyncThunk(
  'products/fetchOneProduct',
  async (idProduct:string,thunkAPI) => {
    const response = await getOneProduct(idProduct);
    return response as productData[];
  }
)
// update status product
export interface UpdateProductInterface{
  accessToken: string;
  idProduct: string;
  status:boolean;
}
export const fetchUpdateStatusProduct = createAsyncThunk(
  'products/fetchUpdateStatusProduct',
  async ({idProduct,accessToken,status}:UpdateProductInterface,thunkAPI) => {
    const response = await updateStatusProduct(idProduct,accessToken,status);
    return response;
  }
)
// update status product
export interface CreateNewProductInterface{
  productname:string;
  owner:string;
  price:number;
  saleprice:number;
  image:string;
  accessToken:string
}
export const fetchCreateNewProduct = createAsyncThunk(
  'products/fetchCreateNewProduct',
  async ({productname,owner,price,saleprice,image,accessToken}:CreateNewProductInterface,thunkAPI) => {
    try{
      const response = await CreateNewProduct(productname,owner,price,saleprice,image,accessToken);
      return response;
    }catch (error: any) {
      const err = thunkAPI.rejectWithValue(error.response.data.message);
      window.alert([`${err.payload}`]);
      return err;
  }
  }
)
// update product
export interface UpdateInforProductInterface{
  idProduct:string;
  accessToken:string;
  productname:string;
  image:string;
  price:number;
  saleprice:number;
  tag:[];
}
export const fetchUpdateInforProduct = createAsyncThunk(
  'products/fetchUpdateInforProduct',
  async ({idProduct,accessToken,productname,image,price,saleprice,tag}:UpdateInforProductInterface,thunkAPI) => {
    try{
      const response = await updateInforProduct(idProduct,accessToken,productname,image,price,saleprice,tag);
      return response;
    }catch (error: any) {
      const err = thunkAPI.rejectWithValue(error.response.data.message);
      window.alert([`${err.payload}`]);
      return err;
  }
  }
)
// create order
export interface CreateOrderInterface{
  idSeller:string;
  idBuyer:string;
  idProduct:string;
  price:number;
  accessToken:string;
}
export const fetchCreateOrder = createAsyncThunk(
  'products/fetchCreateOrder',
  async ({idSeller,idBuyer,idProduct,price,accessToken}:CreateOrderInterface,thunkAPI) => {
    try{
      const response = await CreateNewOrder(idSeller,idBuyer,idProduct,price,accessToken);
      return response;
    }catch (error: any) {
      const err = thunkAPI.rejectWithValue(error.response.data.message);
      window.alert([`${err.payload}`]);
      return err;
  }
  }
)
// handle order
export interface HandleOrderInterface{
  accessToken:string;
  walletPassword:string;
  idOrder:string;
}
export const fetchHandleOrder = createAsyncThunk(
  'products/fetchHandleOrder',
  async ({accessToken,walletPassword,idOrder}:HandleOrderInterface,thunkAPI) => {
    try{
      const response = await HandleOrder(accessToken,walletPassword,idOrder);
      if(response.data !== `Order Id: ${idOrder}, successful transaction`){
        window.alert([`${response.data}`]);
        const rs = await DeleteOrder(idOrder);
      }
      return response;
    }catch (error: any) {
      const err = thunkAPI.rejectWithValue(error.response.data.message);
      const response = await DeleteOrder(idOrder);
      window.alert([`${err.payload}`]);
      return err;
    }
  }
)
// delete order
export const fetchDeleteOrder = createAsyncThunk(
  'products/fetchDeleteOrder',
  async (idOrder:string,thunkAPI) => {
    try{
      const response = await DeleteOrder(idOrder);
      return response;
    }catch (error: any) {
      const err = thunkAPI.rejectWithValue(error.response.data.message);
      window.alert([`${err.payload}`]);
      return err;
    }
  }
)
// get one order
export const fetchGetOneOrder = createAsyncThunk(
  'products/fetchGetOneOrder',
  async (idOrder:string,thunkAPI) => {
    try{
      const response = await GetOneOrder(idOrder);
      return response;
    }catch (error: any) {
      const err = thunkAPI.rejectWithValue(error.response.data.message);
      return err;
    }
  }
)