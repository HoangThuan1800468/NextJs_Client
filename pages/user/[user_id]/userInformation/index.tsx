import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import Link from "next/link";
import router from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { fetchUpdateEmail, fetchUpdatePassword, fetchUpdateUserName, fetchUser } from "../../../../store/User/userThunk";
import { checkPassword } from "../../../../store/User/userService";

// =============================================
const schema = Yup.object().shape({
    newPassword: Yup.string().required(),
    rePassword: Yup.string().required(),
    oldPassword: Yup.string().required(),
  });
  // =============================================

export default function userInformationPage() {
    const dispatch = useDispatch<AppDispatch>();
    const user:any = useSelector((state:RootState)=>state.user.user);

    const [accesstoken,setaccesstoken]=useState({});
    const [user_id,setuser_id]=useState({});

    const [passwordBox,setpasswordBox]=useState({});
    

    useEffect(() => {;
      const accessToken:any = localStorage.getItem("accesstoken");
      setaccesstoken(accessToken);
      const userid:any = localStorage.getItem("id_user");
      setuser_id(userid);
      dispatch(fetchUser({userid,accessToken}));
      setpasswordBox(false);
    }, []);
// 
   async function handleChangeUserName(){
    let username:any = prompt("Enter your new UserName! ", `${user.username}`);
    if(!username){
        window.alert([`Canceled account name change`]);
    }else{
        let password:any = prompt("Please enter your password ", "Password between 10 - 30 characters");
        if(!password){
            window.alert([`Canceled account name change`]);
        }else{
            const res = await checkPassword(user.username,password);
            if(res.checkPassword==false){
                window.alert([`Your password is not validate!`]);
            }else{
                console.log(user);
                const userid:any = user_id;
                const accessToken:any = accesstoken;
                try{
                    const rs = await dispatch(fetchUpdateUserName({userid,accessToken,username}));
                    if (typeof window !== 'undefined') {
                        localStorage.setItem("username", username);
                    }
                    window.alert([`Success! Go to User Page!`]);
                    router.push(`/user/${user_id}`)
                }catch{
                    window.alert([`Wrong some where!`]);
                }
                console.log(user)
            }
        }
    }
   }
   async function handleChangeEmail(){
    let email:any = prompt("Enter your new email! ", `${user.email}`);
    if(!email){
        window.alert([`Canceled account name change`]);
    }else{
        let password:any = prompt("Please enter your password ", "Password between 10 - 30 characters");
        if(!password){
            window.alert([`Canceled account name change`]);
        }else{
            const res = await checkPassword(user.username,password);
            if(res.checkPassword==false){
                window.alert([`Your password is not validate!`]);
            }else{
                console.log(user);
                const userid:any = user_id;
                const accessToken:any = accesstoken;
                try{
                    const rs = await dispatch(fetchUpdateEmail({userid,accessToken,email}));
                    
                    window.alert([`Success! Go to User Page!`]);
                    router.push(`/user/${user_id}`)
                }catch{
                    window.alert([`Wrong some where!`]);
                }
            }
        }
    }
   }
   async function handleChangePassword(){
    setpasswordBox(true);
    // let email:any = prompt("Enter your new email! ", `${user.email}`);
    // if(!email){
    //     window.alert([`Canceled account name change`]);
    // }else{
    //     let password:any = prompt("Please enter your password ", "Password between 10 - 30 characters");
    //     if(!password){
    //         window.alert([`Canceled account name change`]);
    //     }else{
    //         const res = await checkPassword(user.username,password);
    //         if(res.checkPassword==false){
    //             window.alert([`Your password is not validate!`]);
    //         }else{
    //             console.log(user);
    //             const userid:any = user_id;
    //             const accessToken:any = accesstoken;
    //             try{
    //                 const rs = await dispatch(fetchUpdateEmail({userid,accessToken,email}));
                    
    //                 window.alert([`Success!`]);
    //                 router.push(`/${user_id}`)
    //             }catch{
    //                 window.alert([`Wrong some where!`]);
    //             }
    //         }
    //     }
    // }
   }

   // =============================================
  const formik = useFormik({
    initialValues: {
        newPassword: "",
        rePassword: "",
        oldPassword:""
    },
    validationSchema: schema,
    onSubmit: async ({ newPassword, rePassword,oldPassword }) => {
      if(newPassword!==rePassword){
        window.alert([`Your new password and re-password are not validate!`]);
      }else{
        const res = await checkPassword(user.username,oldPassword);
            if(res.checkPassword==false){
                window.alert([`Your password is not validate!`]);
            }else{
                console.log(user);
                const userid:any = user_id;
                const accessToken:any = accesstoken;
                const password:any = rePassword;
                try{
                    const rs = await dispatch(fetchUpdatePassword({userid,accessToken,password}));
                    
                    window.alert([`Success!`]);
                    router.push(`/user/${user_id}`)
                }catch{
                    window.alert([`Wrong some where!`]);
                }
            }
      }
      
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;
// =============================================
  return (     
    <>
    <div>
        <div>User Information page</div>
        <Link href={"/"}>Home</Link>
        <hr/>
        
        <h1>Form User:</h1>
        <h4>User Name: {user.username} <button onClick={handleChangeUserName}>Change User Name</button></h4>
        <h4>Email: {user.email} <button onClick={handleChangeEmail}>Change Email</button></h4>
        <div></div>
        <button onClick={handleChangePassword}>Change Password</button>
        {passwordBox?
            <>
            <hr/>
            <div>
                <form onSubmit={handleSubmit} method="POST">

                <div className="label_text">
                <label htmlFor="newPassword">Old Password</label>
                <input
                    type="password"
                    name="oldPassword"
                    value={values.oldPassword}
                    onChange={handleChange}
                    id="oldPassword"
                    placeholder="Enter your old password"
                />
                {errors.oldPassword && touched.oldPassword && <span>{errors.oldPassword}</span>}
                </div>
                
                <div className="label_text">
                <label htmlFor="newPassword">New Password</label>
                <input
                    type="password"
                    name="newPassword"
                    value={values.newPassword}
                    onChange={handleChange}
                    id="newPassword"
                    placeholder="Password from 10 to 30 characters"
                />
                {errors.newPassword && touched.newPassword && <span>{errors.newPassword}</span>}
                </div>

                <div className="label_text">
                <label htmlFor="rePassword">Password</label>
                <input
                    type="password"
                    name="rePassword"
                    value={values.rePassword}
                    onChange={handleChange}
                    id="rePassword"
                    placeholder="Enter a new password"
                />
                {errors.rePassword && touched.rePassword && <span>{errors.rePassword}</span>}
                </div>
                <button type="submit">Save</button>
            </form>
            </div>
            <hr/>
            </>
        :<></>}
    </div>
    </>
  );
}
