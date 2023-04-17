import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import Link from "next/link";
import { useRouter } from "next/router";
import ListProduct from "../../../Component/Other/ListProduct";
import ListProductOwner from "../../../Component/Other/ListProductOwner";
import { fetchProductsOfUser, fetchUser } from "../../../store/User/userThunk";

export default function ProductOwnerPage() {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {;
      const accessToken:any = localStorage.getItem("accesstoken");
      const userid:any = localStorage.getItem("id_user");

      dispatch(fetchProductsOfUser({accessToken,userid}));
      dispatch(fetchUser({userid,accessToken}));
    }, []);
// 
    const productsOwner = useSelector((state:RootState) => state.user.products);
    const user:any = useSelector((state:RootState)=>state.user);
    
  return (     
    <>
    <div>
        <div>Product Owner page</div>
        <Link href={"/"}>Home</Link>
        <hr/>
        <h1>List Products Owner:</h1>
        <ul>
        {productsOwner.map(product => (
          <ListProductOwner key={product._id} data={product} user={user.user._id}/>
          //   <li>Tag: {JSON.stringify( product.tag , null, 2)}</li> */}
        ))}
      </ul>
    </div>
    </>
  );
}
