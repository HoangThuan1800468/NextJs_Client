import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import Link from "next/link";
import {useEffect, useState } from "react";
import { fetchOneProduct, fetchProduct, fetchSearchProduct, fetchSearchTagProduct } from "../store/Products/productThunk";
import ListProduct from "../Component/Other/ListProduct";
import { fetchUser } from "../store/User/userThunk";
import { useFormik } from "formik";
import * as Yup from "yup";

// =============================================
const schema = Yup.object().shape({
  stringSearch: Yup.string(),
});
// =============================================

const Home: NextPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.product);
  const order:any = useSelector((state:RootState)=>state.product.order);

  const [accesstoken,setaccesstoken]=useState({});
  const [username,setusername]=useState({});
  const [id_user,setid_user]=useState({});
  const [login,setlogin]=useState(false);

  useEffect(() => {
    const accesstoken:any = localStorage.getItem("accesstoken");
    setaccesstoken(accesstoken);
    const username:any = localStorage.getItem("username");
    setusername(username);
    const id_user:any = localStorage.getItem("id_user");
    setid_user(id_user);

    dispatch(fetchProduct());
    
    const userid = id_user;
    const accessToken = accesstoken;
    if(accessToken && userid){
      dispatch(fetchUser({userid,accessToken}));
      setlogin(true)
    }else{
      localStorage.clear();
      setlogin(false)
    }
    
    
  }, []);
   // =============================================
  const formik = useFormik({
    initialValues: {
      stringSearch: "",
    },
    validationSchema: schema,
    onSubmit: async ({ stringSearch }) => {
      if(!stringSearch){
        dispatch(fetchProduct());
      }else{
        const stringSearchArr:any = stringSearch.split("#");
        const string:any = stringSearchArr[1];
        if(string){
          dispatch(fetchSearchTagProduct(string));
        }else{
          dispatch(fetchSearchProduct(stringSearch));
        }
        
      }
      
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;
// =============================================
  return (
    <>
    <div>
      <div>
        <div>Home page</div>
        <Link href={login?`/user/${id_user}`:"/login"}>
          {login?"user: "+username:"login"}
        </Link>
        <form onSubmit={handleSubmit} method="POST">
          <div className="label_text">
            <label htmlFor="stringSearch">Search</label>
            <input
              type="text"
              name="stringSearch"
              value={values.stringSearch}
              onChange={handleChange}
              id="stringSearch"
              placeholder="name or #tag product for search"
            />
            {errors.stringSearch && touched.stringSearch && <span>{errors.stringSearch}</span>}
            <button type="submit">Search</button>
          </div>
          
        </form>
      </div>
      <hr/>
      <h1>List Product: {products.loading && "loading..."}</h1>
      <ul>
        {products.products.map(product => (
          <ListProduct key={product._id} data={product} orderid={order._id}/>
          //   <li>Tag: {JSON.stringify( product.tag , null, 2)}</li> */}
        ))}
      </ul>
      <hr/>
      </div>
    </>
  );
};

export default Home;
