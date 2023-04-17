import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllProduct, getOneProduct } from "./productService";

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