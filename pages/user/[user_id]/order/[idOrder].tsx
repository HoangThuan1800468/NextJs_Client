import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import { useRouter } from "next/router";
import { fetchGetOneOrder, fetchOneProduct } from "../../../../store/Products/productThunk";
import { useEffect, useState } from "react";

const InforOrderPage = () => {
    const dispatch = useDispatch<AppDispatch>();

    const router = useRouter();
    const { idOrder } = router.query;
    const IDOrder:any = idOrder;
    
    useEffect(() => {
        dispatch(fetchGetOneOrder(IDOrder));
      }, [IDOrder]);
    const dataOrder:any = useSelector((state:RootState)=>state.product.order);
    return(
        <>
        <h1>Infor Order ID: {IDOrder}</h1>
        <Link href={"/"}>Home</Link>
        <hr/>
        <div>
            <h2>Product ID: {dataOrder.idProduct}</h2>
            <h3>Seller ID: {dataOrder.idSeller}</h3>
            <h3>Buyer ID: {dataOrder.idBuyer}</h3>
            <h3>Price: {dataOrder.price}$</h3>
            <h3>Status Order: {dataOrder.idProduct?"Order is paid":"Order is unpaid"}</h3>
            <h3>Created At: {dataOrder.createdAt}</h3>
        </div>
        </>
    );
}
export default InforOrderPage;