import axios from 'axios'

// get all product
export const getAllProduct = async ()=>{
    const res = await axios.get("http://localhost:5000/product/getAllProducts");
    return res.data;
  }
// get one product
export const getOneProduct = async (idProduct:string)=>{
    const res = await axios.get(`http://localhost:5000/product/getOneProduct/${idProduct}`);
    return res.data;
  }