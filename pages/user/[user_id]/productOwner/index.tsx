import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import router from "next/router";
import ListProductOwner from "../../../../Component/Other/ListProductOwner";
import { fetchProductsOfUser, fetchUser } from "../../../../store/User/userThunk";
import { fetchCreateNewProduct } from "../../../../store/Products/productThunk";
// =============================================
const schema = Yup.object().shape({
  productname: Yup.string().required(),
  price: Yup.number().required(),
  saleprice: Yup.number().required(),
  img:Yup.string().required(),
});
// =============================================
export default function ProductOwnerPage() {
    const dispatch = useDispatch<AppDispatch>();

    const [accessToken,setaccessToken]=useState({});
    const [showCreateProduct,setshowCreateProduct]=useState({});
    useEffect(() => {

      setshowCreateProduct(false);

      const accessToken:any = localStorage.getItem("accesstoken");setaccessToken(accessToken);
      const userid:any = localStorage.getItem("id_user");

      dispatch(fetchProductsOfUser({accessToken,userid}));
      dispatch(fetchUser({userid,accessToken}));
    }, []);
// 
    const productsOwner = useSelector((state:RootState) => state.user.products);
    const user:any = useSelector((state:RootState)=>state.user);
    // =============================================
      const formik = useFormik({
        initialValues: {
          productname: "",
          price: 0,
          saleprice:0,
          img:""
        },
        validationSchema: schema,
        onSubmit: async ({ productname, price,saleprice,img }) => {
          const imageArr:any = img.split("\\");
          
          const image:any = imageArr[2];
          const accessToken:any = localStorage.getItem("accesstoken");
          const owner:any = localStorage.getItem("id_user");
          try{
            const res:any = dispatch(fetchCreateNewProduct({productname,owner,price,saleprice,image,accessToken}));
            window.alert([`Success!`]);
            router.push(`/user/${owner}`)
          }catch{
            window.alert([`Faile!`]);
          }
          
        },
      });
      const { errors, touched, values, handleChange, handleSubmit } = formik;
    // =============================================
  async function showCreateNewProduct() {
    setshowCreateProduct(true);
  }
  async function EndshowCreateNewProduct() {
    setshowCreateProduct(false);
  }
  return (     
    <>
    <div>
        
        
        <div>Product Owner page</div>
        <Link href={"/"}>Home</Link>
        <hr/>
        {showCreateProduct?
          <button onClick={EndshowCreateNewProduct}>Cancle create new product</button>
        :
          <button onClick={showCreateNewProduct}>Create new Product</button>
        }
        
        {showCreateProduct?
          <>
          <form onSubmit={handleSubmit} method="POST">
            <div className="label_text">
              <label htmlFor="productname">Product Name</label>
              <input
                type="text"
                name="productname"
                value={values.productname}
                onChange={handleChange}
                id="productname"
              />
              {errors.productname && touched.productname && <span>{errors.productname}</span>}
            </div>

            <div className="label_text">
              <label htmlFor="img">Image</label>
              <input
                type="file"
                name="img"
                value={values.img}
                onChange={handleChange}
                id="img"
              />
              {errors.img && touched.img && <span>{errors.img}</span>}
            </div>

            <div className="label_text">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                value={values.price}
                onChange={handleChange}
                id="price"
              />
              {errors.price && touched.price && <span>{errors.price}</span>}
            </div>

            <div className="label_text">
              <label htmlFor="saleprice">Sale Price</label>
              <input
                type="number"
                name="saleprice"
                value={values.saleprice}
                onChange={handleChange}
                id="saleprice"
              />
              {errors.saleprice && touched.saleprice && <span>{errors.saleprice}</span>}
            </div>
            <button type="submit">Create</button>
          </form>
          </>
          :
          ""
        }
        <h1>List Products Owner:</h1>
        <ul>
        {productsOwner.map(product => (
          <ListProductOwner key={product._id} data={product} user={user.user._id} accesstoken={accessToken}/>
          //   <li>Tag: {JSON.stringify( product.tag , null, 2)}</li> */}
        ))}
      </ul>
    </div>
    </>
  );
}
