import axios from 'axios'

// get all product
export const getAllProduct = async ()=>{
    const res = await axios.get("http://localhost:5000/product/getAllProducts");
    return res.data;
  }
// search name product
export const searchProduct = async (tag:string)=>{
  const res = await axios.get(`http://localhost:5000/product/searchProducts/${tag}`);
  return res.data;
}
// search tag product
export const searchTagProduct = async (string:string)=>{
  const res = await axios.get(`http://localhost:5000/product/getProductsWithTags/${string}`);
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
// update infor product 
export const updateInforProduct = async ( idProduct:string,
                                          accessToken:string,
                                          productname:string,
                                          image:string,
                                          price:number,
                                          saleprice:number,
                                          tag:[]) => {
  const res = await axios.put(`http://localhost:5000/product/updateProduct/${idProduct}`,
  {
    "accessToken":accessToken,
    "idProduct":idProduct,
    "productname":productname,
    "image":image,
    "price":price,
    "saleprice":saleprice,
    "tag":tag,
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
// create new order 
export const CreateNewOrder = 
  async (idSeller:string,idBuyer:string,idProduct:string,price:number,accessToken:string) => {
    const res = await axios.post(`http://localhost:5000/tradingOrder/createOrder`,
    {
      "idSeller":idSeller,
      "idBuyer":idBuyer,
      "idProduct":idProduct,
      "price":price,
      "accessToken":accessToken
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
  })
  return res;
}
// handle order 
export const HandleOrder = 
  async (accessToken:string,walletPassword:string,idOrder:string) => {
    const res = await axios.put(`http://localhost:5000/tradingOrder/handleOrder/${idOrder}`,
    {
      "idOrder":idOrder,
      "walletPassword":walletPassword,
      "accessToken":accessToken
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
  })
  return res;
}
// delete order 
export const DeleteOrder = 
  async (idOrder:string) => {
    const res = await axios.delete(`http://localhost:5000/tradingOrder/deleteOrder/${idOrder}`);
  return res;
}
// get one order 
export const GetOneOrder = 
  async (idOrder:string) => {
    const res = await axios.get(`http://localhost:5000/tradingOrder/getOneOrder/${idOrder}`);
  return res;
}