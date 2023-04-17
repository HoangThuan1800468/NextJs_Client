import axios from 'axios'

  // get infor user
  
  export const getInforUser = async (userid:string,accessToken:string)=>{
    const res = await axios.post(`http://localhost:5000/users/getUser/${userid}`,
      {
        "accessToken":accessToken,
        "userid":userid
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
      )
    return res.data;
  }

  // get product of user
  export const getProductsOfUser = async (UserId:string,accessToken:string) => {
    return (await axios.post(
        `http://localhost:5000/product/getProductOfOwner/${UserId}`,
        {
          "accessToken":accessToken,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )).data;
  }
  // get wallet of user
  export const getWalletOfUser = async (UserId:string,accessToken:string,walletPassword:string) => {
    return (await axios.post(
        `http://localhost:5000/users/getWalletUser/${UserId}`,
        {
          "accessToken":accessToken,
          "walletPassword":walletPassword,
          "userid":UserId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )).data;
  }
  // login
  export function setLogin(UserId:string,UserName:string,AccesToken:string){
    if (typeof window !== 'undefined') {
      localStorage.setItem("username", UserName);
      localStorage.setItem("id_user", UserId);
      localStorage.setItem("accesstoken", AccesToken);
    }
  }
  export const login = async (username:string,password:string) => {
    return (await axios.post(
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
      )).data;
  }
  // check password
  export const checkPassword = async (username:string,password:string) => {
    return (await axios.post(
        "http://localhost:5000/auth/checkPassword",
        {
          "username":username,
          "password":password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )).data;
  }
  // logout
  export const logout = async (userId:string) => {
    try{
      await axios.get(`http://localhost:5000/auth/logout/${userId}`);
      return true;
    }catch{
      return false;
    }
  }
  // register
  export const register = async (username:string, email:string,password:string,passwordWallet:string) => {
      const res = await axios.post("http://localhost:5000/users/createUser",
      {
        "username":username,
        "email":email,
        "password":password,
        "passwordWallet":passwordWallet
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      })
      return res;
  }
  // updateUser
  // 
  // username
  export const updateUserName = async (userid:string,accessToken:string,username:string) => {
    const res = await axios.put(
    `http://localhost:5000/users/updateUser/${userid}`,
    {
      "accessToken":accessToken,
      "userid":userid,
      "username":username
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    })
    return res;
}
// mail
export const updateEmail = async (userid:string,accessToken:string,email:string) => {
  const res = await axios.put(
  `http://localhost:5000/users/updateUser/${userid}`,
  {
    "accessToken":accessToken,
    "userid":userid,
    "email":email
  },
  {
    headers: {
      "Content-Type": "application/json",
    },
  })
  return res;
}
// password
export const updatePassword = async (userid:string,accessToken:string,password:string) => {
  const res = await axios.put(
  `http://localhost:5000/users/updateUser/${userid}`,
  {
    "accessToken":accessToken,
    "userid":userid,
    "password":password
  },
  {
    headers: {
      "Content-Type": "application/json",
    },
  })
  return res;
}
// add money
export const addMoney = async (userid:string,accessToken:string,balanceInWallet:number) => {
  const res = await axios.put(
  `http://localhost:5000/users/updateUser/${userid}`,
  {
    "accessToken":accessToken,
    "userid":userid,
    "balanceInWallet":balanceInWallet
  },
  {
    headers: {
      "Content-Type": "application/json",
    },
  })
  return res;
}