import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import Link from "next/link";
import { useRouter } from "next/router";
import { fetchOneProduct } from "../../store/Products/productThunk";
// =============================================
export default function ProductPage() {
  const dispatch = useDispatch<AppDispatch>();
  
  // get user id from params
  const router = useRouter();
  const { idProduct } = router.query;
  const productId:any = idProduct;
  // 
  
  useEffect(() => {;
    dispatch(fetchOneProduct(productId));
  }, [productId]);
  // 
  const product = useSelector((state:RootState)=>state.product.product)
  return (
    <>
    <div>
        <div>Product page</div>
        <Link href={"/"}>Home</Link>
        <hr/>
        <div>
            <h1>Product Name: {product.productname}</h1>
            <h2>Product ID: {product._id}</h2>
            <h2>Product Image: {product.image}</h2>
            <h3>Product price: {product.price}$</h3>
            <h3>Product sale: {product.saleprice}$</h3>
            {product.status?<button>Buy now</button>:<button>Favourite</button>}
        </div>
    </div>
    </>
  );
}
