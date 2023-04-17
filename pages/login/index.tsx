import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import router from "next/router";
import { login, setLogin } from "../../store/User/userService";
import { changeUser } from "../../store/User/userSlice";
import { fetchLoginUser, fetchProductsOfUser, fetchUser } from "../../store/User/userThunk";

// =============================================
const schema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});
// =============================================
export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
// =============================================
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async ({ username, password }) => {
      try{
        const res = await login(username,password);
        if(res.access_token){
          setLogin(res.id_user,username,res.access_token);
          const userid:string = res.id_user;
          const accessToken:string = res.access_token;
          await dispatch(fetchUser({accessToken,userid}));
          await dispatch(fetchProductsOfUser({accessToken,userid}));
          window.alert([`Wellcome user: ${username}`]);
          router.push("/")
        }else{
          window.alert([`Wrong username or password`]);
        }
      }catch{
        window.alert([`Wrong username or password`]);
      }
      
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;
// =============================================

  return (     
    <>
    <div>
        <div>Login page</div>
        <Link href={"/"}>Home</Link>
        <hr/>
    </div>
    <div>Form Login</div>
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
        <Link href={"/login/register"}>Don't have account? Click here!</Link>
    </>
  );
}
