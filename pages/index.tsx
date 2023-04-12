import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addProduct, fetchProduct } from "../store/productSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { addUserAuth } from "../store/authSlice";


const schema = Yup.object().shape({
  name: Yup.string().required(),
  id: Yup.string().required()
});

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
  }, [])

  // ===================================
  const formik = useFormik({
    initialValues: {
      name: "",
      id: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async ({ name, id }) => {
      // Make a request to your backend to store the data
      const action = addProduct(values);
      dispatch(action);
    },
  });

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleSubmit } = formik;
   // ===================================
   
  return (
    <>
    <div>
      <div>
        <div>Home page</div>
        <Link href={accesstoken?`/${id_user}`:"/login"}>{accesstoken?"user: "+username:"login"}</Link>
      </div>
      <hr/>
      <span>
        {/* {products.map(product => (
        <div>{product.name} and id: {product.id}</div>
        ))} */}
      </span>
      <h1>Product - {products.loading && "loading..."}</h1>
      <button
        onClick={() => {
          const res = dispatch(fetchProduct());
          console.log("res", res);
          res
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        }}
      >
        List Product:
      </button>
      <ul>
        {products.products.map(product => (
          <ul key={product.id} >
            Product Name: {product.productname}
            <li>Image: {product.image}</li>
            <li>Price: {product.price}</li>
            <li>Tag: {product.tag}</li>
          </ul>
        ))}
      </ul>
      <hr/>
      <div>Form product</div>
        <form onSubmit={handleSubmit} method="POST">
          <div className="label_text">
            <label htmlFor="name" >Name Product: </label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              id="name"
            />
            {errors.name && touched.name && <span>{errors.name}</span>}
          </div>

          <div className="label_text">
            <label htmlFor="id" >ID Product: </label>
            <input
              type="text"
              name="id"
              value={values.id}
              onChange={handleChange}
              id="id"
            />
            {errors.id && touched.id && <span>{errors.id}</span>}
          </div>

          

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Home;
