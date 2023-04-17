import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateNewProduct, getAllProduct, getOneProduct, updateStatusProduct } from "./productService";

type productData = any;
// get all product
export const fetchProduct = createAsyncThunk(
    'products/fetchProduct',
    async (thunkAPI) => {
      const response = await getAllProduct();
      return response as productData[];
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
// productname:string,owner:string,price:number,saleprice:number,image:string,accessToken:string
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