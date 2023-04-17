import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import Link from "next/link";
import {useEffect, useState } from "react";
import { fetchOneProduct, fetchProduct } from "../store/Products/productThunk";
import ListProduct from "../Component/Other/ListProduct";
import { fetchUser } from "../store/User/userThunk";

const Home: NextPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.product);

  const [accesstoken,setaccesstoken]=useState({});
  const [username,setusername]=useState({});
  const [id_user,setid_user]=useState({});

  useEffect(() => {;
    const a:any = localStorage.getItem("accesstoken");
    setaccesstoken(a);
    const b:any = localStorage.getItem("username");
    setusername(b);
    const c:any = localStorage.getItem("id_user");
    setid_user(c);

    dispatch(fetchProduct());
    
    const userid = c;
    const accessToken = a;
    dispatch(fetchUser({userid,accessToken}));
    
  }, []);
   
  return (
    <>
    <div>
      <div>
        <div>Home page</div>
        <Link href={accesstoken?`/${id_user}`:"/login"}>
          {accesstoken?"user: "+username:"login"}
        </Link>
      </div>
      <hr/>
      <h1>List Product: {products.loading && "loading..."}</h1>
      <ul>
        {products.products.map(product => (
          <ListProduct key={product._id} data={product}/>
          //   <li>Tag: {JSON.stringify( product.tag , null, 2)}</li> */}
        ))}
      </ul>
      <hr/>
      </div>
    </>
  );
};

export default Home;
