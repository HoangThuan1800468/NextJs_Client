import axios from 'axios'

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