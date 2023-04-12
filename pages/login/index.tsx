import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addUserAuth } from "../../store/authSlice";
import axios from "axios";
import router from "next/router";


const schema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async ({ username, password }) => {
      console.log({ username, password });
      try {
        const res = await axios.post(
          "http://localhost:5000/auth/login",
          {
            "username":username,
            "password":password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        if(!res.data.access_token){
          window.alert(["Username or password not in db"]);
        }else{
          console.log(res.data.id_user)
          window.alert(["login success!"]);
          const data = {
            username:username,
            accesstoken:res.data.access_token
          }
          const action = addUserAuth(data);
          console.log({ action });
          dispatch(action);
          if (typeof window !== 'undefined') {
            localStorage.setItem("username", username);
            localStorage.setItem("id_user", res.data.id_user);
            localStorage.setItem("accesstoken", res.data.access_token);
          }
          router.push("/")
        }
      } catch (e) {
        window.alert(["Username or password not in db"]);
      }
    },
  });

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (     
    <>
    <div>
        <div>Login page</div>
        <Link href={"/"}>Home</Link>
        <hr/>
    </div>
    <div>Form login</div>
        <form onSubmit={handleSubmit} method="POST">
          <div className="label_text">
            <label htmlFor="name">User Name</label>
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              id="username"
            />
            {errors.username && touched.username && <span>{errors.username}</span>}
          </div>

          <div className="label_text">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              id="password"
            />
            {errors.password && touched.password && <span>{errors.password}</span>}
          </div>

          

          <button type="submit">Login</button>
        </form>
    </>
  );
}
