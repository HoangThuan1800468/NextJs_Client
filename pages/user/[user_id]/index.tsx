import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import Link from "next/link";
import { useRouter } from "next/router";
import { fetchLogoutUser, fetchProductsOfUser, fetchUser } from "../../../store/User/userThunk";

export default function UserPage() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user);
  // get user id from params
  const router = useRouter();
  const { user_id } = router.query;
  const userid:any = user_id;
  // 
  const [accesstoken,setaccesstoken]=useState({});
  useEffect(() => {;
    const accessToken:any = localStorage.getItem("accesstoken");
    setaccesstoken(accessToken);
    const userid:any = localStorage.getItem("id_user");

    dispatch(fetchProductsOfUser({accessToken,userid}));

      const rs = dispatch(fetchUser({userid,accessToken}));
    
  }, []);
  // 
  
  // 
  const a:any = user;
  const b:Array<any> = a.transactionHistory;
  const c:any[] = b;
  // 
  function handleLogout(){
    localStorage.clear();
    dispatch(fetchLogoutUser(userid));
    console.log("logout roi ne");
    router.push("/")
  }
  function handleFecthUser(){
    const accessToken:any = accesstoken;
    dispatch(fetchUser({userid,accessToken}));
  }

  return (     
    <>
    <div>
        <div>User page</div>
        <Link href={"/"}>Home</Link>
        <hr/>
        <button onClick={handleLogout}>Logout</button>
        <div></div>
        <button><Link href={`/user/${userid}/productOwner`}>Product Owner</Link></button>
        <div></div>
        <button onClick={handleFecthUser}><Link href={`/user/${userid}/userInformation`}>Change your information</Link></button>
        <div></div>
        <button><Link href={`/user/${userid}/walletUser`}>Wallet</Link></button>
        <div></div>
        <hr/>
        <h1>User infor:</h1>
        <ul>
          <h1>User name:  {a.username}</h1> 
          <li>Email: {a.email}</li>
          <li>
            <ul>
              transactionHistory:
              <pre>
              {
                c?.map((tran:any)=>(
                  <li key={tran}>
                    <Link href={`/user/${userid}/order/${tran}`}>
                        {tran}
                    </Link>
                  </li>
                ))
              }
              </pre>
            </ul>
            
          </li>
          
        </ul>
      <hr/>
    </div>
    </>
  );
}
