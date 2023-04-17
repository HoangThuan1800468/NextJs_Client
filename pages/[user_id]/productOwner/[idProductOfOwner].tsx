import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { useRouter } from "next/router";
import { fetchOneProduct } from "../../../store/Products/productThunk";
import { useEffect } from "react";

function InforProductOwner (props:any){
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    
    // 
    const { idProductOfOwner } = router.query;
    const IDProduct:any = idProductOfOwner;
    
    useEffect(() => {;
        dispatch(fetchOneProduct(IDProduct))
      }, [IDProduct]);
    const dataProduct:any = useSelector((state:RootState)=>state.product.product);
    return(
        <>
        <h1>Infor product of owner</h1>
        <Link href={"/"}>Home</Link>
        <hr/>
        <div>
            <h1>Product Name: {dataProduct.productname}</h1>
            <h2>Product ID: {dataProduct._id}</h2>
            <h2>Product Image: {dataProduct.image}</h2>
            <h3>Product price: {dataProduct.price}$</h3>
            <h3>Product sale: {dataProduct.saleprice}$</h3>
            {dataProduct.status?<button>Buy now</button>:<button>Favourite</button>}
        </div>
        </>
    );
}
export default InforProductOwner;