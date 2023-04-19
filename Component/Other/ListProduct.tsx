import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchDeleteOrder, fetchHandleOrder, fetchOneProduct, fetchProduct } from "../../store/Products/productThunk";
import { useEffect, useState } from "react";
import router from "next/router"
import { fetchCreateOrder } from "../../store/Products/productThunk";
import { DeleteOrder, HandleOrder } from "../../store/Products/productService";

function ListProduct (props:any){
  const dispatch = useDispatch<AppDispatch>();

  const idProduct:any = props.data._id;  

  const [accesstoken,setaccesstoken]=useState({});
  const [id_user,setid_user]=useState({});

  useEffect(() => {
    const a:any = localStorage.getItem("accesstoken");
    setaccesstoken(a);
    const c:any = localStorage.getItem("id_user");
    setid_user(c);
    
  }, []);

    async function handleCreateOrder(){
      if(!accesstoken){
        window.alert("You need login for trade!");
        router.push("/login");
      }else{
        let walletPassword:any = prompt("Enter your password Wallet! ", `6 chars`);
        if(!walletPassword){
          window.alert([`Canceled buy product`]);
        }else{
          const idSeller:any = props.data.owner;
          const idBuyer:any = id_user;
          const price:number = props.data.saleprice;
          const accessToken:any = accesstoken;

          const res:any = await dispatch(fetchCreateOrder({idSeller,idBuyer,idProduct,price,accessToken}));
          const orderid:any = res.payload.data._id;
          const idOrder:any = orderid;
          
          const reas:any = await dispatch(fetchHandleOrder({accessToken,walletPassword,idOrder}));
          console.log(reas)
          dispatch(fetchProduct());
        }    
      }
    }
    function handleSetStateProduct(){
      dispatch(fetchOneProduct(idProduct))
    }
    return(
        <>
        <ul key={props.data._id} >
            <button onClick={handleSetStateProduct}>
            <Link href={`/product/${props.data._id}`} >
              Product Name: {props.data.productname}
            </Link>
            </button>
            <li>Product Price: {props.data.price} $</li>
            <li>Product Sale: {props.data.saleprice} $</li>
            {props.data.status?<button onClick={handleCreateOrder}>Buy now</button>:<ul>Not open for sale</ul>}
            <hr/>
          </ul>
        </>
    );
}
export default ListProduct;