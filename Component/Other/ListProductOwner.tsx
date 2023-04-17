import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchOneProduct, fetchUpdateStatusProduct } from "../../store/Products/productThunk";
import { useEffect, useState } from "react";

function ListProductOwner (props:any){
    const dispatch = useDispatch<AppDispatch>();
    const idProduct:any = props.data._id;
    const user:any = props.user;
    const accessToken:any = props.accesstoken;

    const [statusProduct,setstatusProduct]=useState({});
    
    useEffect(() => {;
      setstatusProduct(props.data.status);
    }, []);

    async function handleChangeStatusTrue(){
      const status:boolean = true;
      const res:any = await dispatch(fetchUpdateStatusProduct({idProduct,accessToken,status}));
      setstatusProduct(true);
    }
    async function handleChangeStatusFalse(){
      const status:boolean = false;
      const res:any = await dispatch(fetchUpdateStatusProduct({idProduct,accessToken,status}));
      setstatusProduct(false);
    }
    async function handleDeleteProduct(){
      window.alert([`DELETE`]);
    }
    function handleSetStateProduct(){
      dispatch(fetchOneProduct(idProduct))
    }
    return(
        <>
        <ul key={props.data._id} >
            <button onClick={handleSetStateProduct}>
            <Link href={`/${user}/productOwner/${props.data._id}`} >
              Product Name: {props.data.productname}
            </Link>
            </button>
            <li>Product Price: {props.data.price} $</li>
            <li>Product Sale: {props.data.saleprice} $</li>
            {
              statusProduct?
              <button onClick={handleChangeStatusFalse}>Stop sale</button>
              :
              <button onClick={handleChangeStatusTrue}>Sale now</button>
            }
            <button>Edit</button>
            <button onClick={handleDeleteProduct}>Delete</button>
            <hr/>
          </ul>
        </>
    );
}
export default ListProductOwner;