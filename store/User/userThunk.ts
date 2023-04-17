import { createAsyncThunk } from "@reduxjs/toolkit";
import { addMoney, checkPassword, getInforUser, getProductsOfUser, getWalletOfUser, login, logout, register, updateEmail, updatePassword, updateUserName } from "./userService";
import router from "next/router";

type userData = any;

// get infor user
export interface UserGetInfor {
    accessToken: string;
    userid: string;
}

export const fetchUser = createAsyncThunk('user/fetchUser',
  async ({userid,accessToken}:UserGetInfor,thunkAPI) => {
    const response = await getInforUser(userid,accessToken);
    return response as userData[];
  }
)

// get products of user
export const fetchProductsOfUser = createAsyncThunk('user/fetchProductsOfUser',
  async ({userid,accessToken}:UserGetInfor,thunkAPI) => {
    const response = await getProductsOfUser(userid,accessToken);
    return response as userData[];
  }
)
// update information user
// username
export interface UserUpdateUsername {
  accessToken: string;
  userid: string;
  username:string;
}
export const fetchUpdateUserName = createAsyncThunk('user/fetchUpdateUserName',
  async ({userid,accessToken,username}:UserUpdateUsername,thunkAPI) => {
    const response = await updateUserName(userid,accessToken,username);
    return response;
  }
)
// email
export interface UserUpdateEmail {
  accessToken: string;
  userid: string;
  email:string;
}
export const fetchUpdateEmail = createAsyncThunk('user/fetchUpdateEmail',
  async ({userid,accessToken,email}:UserUpdateEmail,thunkAPI) => {
    const response = await updateEmail(userid,accessToken,email);
    return response;
  }
)
// password
export interface UserUpdatePassword {
  accessToken: string;
  userid: string;
  password:string;
}
export const fetchUpdatePassword = createAsyncThunk('user/fetchUpdatePassword',
  async ({userid,accessToken,password}:UserUpdatePassword,thunkAPI) => {
    const response = await updatePassword(userid,accessToken,password);
    return response;
  }
)
// add money
export interface UserAddMoney {
  accessToken: string;
  userid: string;
  balanceInWallet:number;
}
export const fetchAddMoney = createAsyncThunk('user/fetchAddMoney',
  async ({userid,accessToken,balanceInWallet}:UserAddMoney,thunkAPI) => {
    const response = await addMoney(userid,accessToken,balanceInWallet);
    return response;
  }
)
// login 
export interface UserLogin {
  username: string;
  password: string;
}
export const fetchLoginUser = createAsyncThunk('user/fetchLoginUser',
  async ({username,password}:UserLogin,thunkAPI) => {
      const response = await login(username,password);
      return response as userData[];
  }
)
// check password
export const fetchCheckPassword = createAsyncThunk('user/fetchCheckPassword',
  async ({username,password}:UserLogin,thunkAPI) => {
      const response = await checkPassword(username,password);
      return response;
  }
)
// logout
export const fetchLogoutUser = createAsyncThunk('user/fetchLogoutUser',
  async (userId:string,thunkAPI) => {
      const response = await logout(userId);
      return response;
  }
)
// register
export interface UserRegister {
  username: string;
  email:string;
  password: string;
  passwordWallet:string;
}

export const fetchRegister = createAsyncThunk('user/fetchRegistwr',
  async ({username,email,password,passwordWallet}:UserRegister,thunkAPI) => {
    try{
      const response = await register(username,email,password,passwordWallet);
      window.alert([`Nice to meet you ${response.data.username}`]);
      router.push("/login");
      return response;
    }catch (error: any) {
      const err = thunkAPI.rejectWithValue(error.response.data.message);
      if(err.payload === "Forbidden resource"){
        window.alert([`Username already in the system`]);
      }else{
        window.alert([`${err.payload}`]);
      }
      return err;
  }
      
  }
)