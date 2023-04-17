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
// update status product 
export const updateStatusProduct =async (idProduct:string,accessToken:string,status:boolean) => {
  const res = await axios.put(`http://localhost:5000/product/updateProduct/${idProduct}`,
  {
    "accessToken":accessToken,
    "idProduct":idProduct,
    "status":status
  },
  {
    headers: {
      "Content-Type": "application/json",
    },
  })
  return res;
}
// create new product 
export const CreateNewProduct = 
  async (productname:string,owner:string,price:number,saleprice:number,image:string,accessToken:string) => {
    const res = await axios.post(`http://localhost:5000/product/createProduct`,
    {
      "productname":productname,
      "owner":owner,
      "price":price,
      "saleprice":saleprice,
      "image":image,
      "accessToken":accessToken
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
  })
  return res;
}