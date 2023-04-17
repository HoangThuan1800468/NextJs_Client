import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { fetchAddMoney, fetchUser } from "../../../store/User/userThunk";
import { number } from "yup";
import _ from "lodash";
import { checkPassword, getWalletOfUser } from "../../../store/User/userService";

export default function WalletUserPage() {
    const dispatch = useDispatch<AppDispatch>();
    const user:any = useSelector((state:RootState)=>state.user.user);

    const router = useRouter();
    const { user_id } = router.query;
    const UserID_Params:any = user_id;

    const [accesstoken,setaccesstoken]=useState({});
    const [userID,setuserID]=useState({});
    const [showMoney,setshowMoney]=useState({});


    useEffect(() => {;
        const accessToken:any = localStorage.getItem("accesstoken");
        setaccesstoken(accessToken);
        const userid:any = localStorage.getItem("id_user");
        setuserID(userid);
        dispatch(fetchUser({userid,accessToken}));
        setshowMoney(false)
    }, []);

    async function handleShowMoney(){
        let walletPassword:any = prompt("Enter your password Wallet! ", `6 chars`);
        if(!walletPassword){
            window.alert([`Canceled show money`]);
        }else{
            const userid:any = userID;
            const accessToken:any = accesstoken;
            const res = await getWalletOfUser(userid,accessToken,walletPassword);
            console.log(res)
            res.transactionHistory?setshowMoney(true):setshowMoney(false)
            
        }
    }
    async function handleAddMoney() {
        let money:any = prompt("Enter the amount! ", `Is number`);
        if(!money){
            window.alert([`Canceled add money`]);
        }else{
            // check money is number
            const a:number = money-1;
            if(money>a){
                let password:any = prompt("Please enter your password ", "Password between 10 - 30 characters");
                if(!password){
                    window.alert([`Canceled add money`]);
                }else{
                    const res = await checkPassword(user.username,password);
                    if(res.checkPassword==false){
                        window.alert([`Your password is not validate!`]);
                    }else{
                        const userid:any = user_id;
                        const accessToken:any = accesstoken;
                        const walletMoney:any = user.balanceInWallet;
                        let balanceInWallet:number = parseInt(money) + parseInt(walletMoney);
                        try{
                            const rs = await dispatch(fetchAddMoney({userid,accessToken,balanceInWallet}));
                            window.alert([`Success! Go to User Page!`]);
                            router.push(`/${user_id}`)
                        }catch{
                            window.alert([`Wrong some where!`]);
                        }
                    }
                }
            }else{
                window.alert([`must be number`]);
            }
            
        }
    }
  return (     
    <>
    <div>
        <div>Wallet User page</div>
        <Link href={"/"}>Home</Link>
        <hr/>
        <h5>Wallet ID: {user._id}</h5>
        <h5>Balance In Wallet:  
            {showMoney?" "+user.balanceInWallet+"$":<button onClick={handleShowMoney}>Show Money</button>}
        </h5>
        <button onClick={handleAddMoney}>Add money to your wallet</button>
        <h5>Transaction History:  
        <pre>
              {
                user.transactionHistory?.map((tran:any)=>(
                  <li key={tran}>{tran}</li>
                ))
              }
              </pre>
        </h5>
    </div>
    </>
  );
}
