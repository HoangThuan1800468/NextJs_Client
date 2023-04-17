import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import router from "next/router";
import { login, setLogin } from "../../store/User/userService";
import { changeUser } from "../../store/User/userSlice";
import { fetchRegister } from "../../store/User/userThunk";

// =============================================
const schema = Yup.object().shape({
  username: Yup.string().required(),
  email: Yup.string().required().email(),
  password: Yup.string().required(),
  passwordWallet: Yup.string().required(),
});
// =============================================
export default function RegisterPage() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state:RootState)=>state.user);
// =============================================
  const formik = useFormik({
    initialValues: {
      username: "",
      email:"",
      password: "",
      passwordWallet:""
    },
    validationSchema: schema,
    onSubmit: async ({ username,email, password, passwordWallet }) => {
        const res = await dispatch(fetchRegister({username,email,password,passwordWallet}));
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;
// =============================================

  return (     
    <>
    <div>
        <div>Register page</div>
        <Link href={"/"}>Home</Link>
        <hr/>
    </div>
    <div>Form Register</div>
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
          {/*  */}
          <div className="label_text">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              id="email"
            />
            {errors.email && touched.email && <span>{errors.email}</span>}
          </div>
          {/*  */}
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
          {/*  */}
          <div className="label_text">
            <label htmlFor="passwordWallet">Password Wallet</label>
            <input
              type="password"
              name="passwordWallet"
              value={values.passwordWallet}
              onChange={handleChange}
              id="passwordWallet"
            />
            {errors.passwordWallet && touched.passwordWallet && <span>{errors.passwordWallet}</span>}
          </div>
          <button type="submit">Create</button>
        </form>
        <Link href={"/login"}>Login click here!</Link>
    </>
  );
}
