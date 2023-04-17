import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProduct, getOneProduct, updateStatusProduct } from "./productService";

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