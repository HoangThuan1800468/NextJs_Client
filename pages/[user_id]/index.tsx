import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addUserAuth } from "../../store/authSlice";
import axios from "axios";
import router, { useRouter } from "next/router";
import { addUser, fetchUser, removeUser } from "../../store/userSlice";

const schema = Yup.object().shape({
  username: Yup.string().required(),
  email: Yup.string().required()
});



export default function UserPage() {
 

  const router = useRouter();
  const { user_id } = router.query;
  const userid:any = user_id;

  const [accesstoken,setaccesstoken]=useState({});
  useEffect(() => {
    const a:any = localStorage.getItem("accesstoken");
    setaccesstoken(a);
  }, [user_id])
  const accessToken:any = accesstoken;

  // console.log({
  //   "userid":user_id,
  //   "accesToken":accessToken
  // })

  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);
  
  // console.log(user)
  // 
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async ({ username, email }) => {
      console.log({username,email})
    },
  });

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleSubmit } = formik;
    function handleLogout():any{
        localStorage.clear();
        dispatch(removeUser());
        console.log("logout roi ne");
        router.push("/")
       }
  return (     
    <>
    <div>
        <div>User page</div>
        <Link href={"/"}>Home</Link>
        <hr/>
        <button onClick={handleLogout}>Logout</button>
        <hr/>
        {/* ====== */}
        <h1>User infor - {user.loading && "loading..."}</h1>
      <button
        onClick={() => {
          try{
            const res = dispatch(fetchUser({userid,accessToken}));
          console.log("res", res);
          res.then((data) => console.log(data))
              .catch((err) => console.log(err));
          
          }catch{
            window.alert(["You ned relogin!"]);
            router.push("/login")
          }
        }}
      >
        Get User infor:
      </button>
      <ul>
        <h1>User name:  {user.users.username}</h1> 
        <li>Email: {user.users.email}</li>
        <li>transactionHistory:
        <pre>{JSON.stringify( user.users.transactionHistory , null, 2)}</pre>
        </li>

      </ul>
        {/* ====== */}
        <hr/>
        <div>Form user</div>
        <div>Id user: {user_id}</div>
        <form onSubmit={handleSubmit} method="POST">
          <div className="label_text">
            <label htmlFor="username" >User name: </label>
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              id="username"
              placeholder={user.users.username}
            />
            {errors.username && touched.username && <span>{errors.username}</span>}
          </div>

          <div className="label_text">
            <label htmlFor="email" >Email: </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              id="email"
              placeholder={user.users.email}
            />
            {errors.email && touched.email && <span>{errors.email}</span>}
          </div>

          

          <button type="submit">Update</button>
        </form>
      {/* =========== */}
    </div>
    </>
  );
}
