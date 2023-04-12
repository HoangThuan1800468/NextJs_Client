import axios from 'axios'

export const login = async (username:string,password:string)=>{
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
      return res.data;
    //   if(!res.data.access_token){
    //     window.alert(["Username or password not in db"]);
    //   }else{
    //     console.log(res.data.id_user)
    //     window.alert(["login success!"]);
    //     const data = {
    //       username:username,
    //       accesstoken:res.data.access_token
    //     }
    //     const action = addUserAuth(data);
    //     console.log({ action });
    //     dispatch(action);
    //     if (typeof window !== 'undefined') {
    //       localStorage.setItem("username", username);
    //       localStorage.setItem("id_user", res.data.id_user);
    //       localStorage.setItem("accesstoken", res.data.access_token);
    //     }
    //     router.push("/")
    //   }
  }
  