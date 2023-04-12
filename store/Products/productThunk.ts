import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type productData = any;

export const fetchProduct = createAsyncThunk(
    'products/fetchProduct',
    async (thunkAPI) => {
      const response = await axios.get("http://localhost:5000/product/getAllProducts");
      return response.data as productData[];
    }
)