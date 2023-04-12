import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';

export interface UserState {
    users:Array<any>,
    loading:boolean
}
export interface UserGetInfor {
    accessToken: string;
    userid: string;
}
type userData = {
  username:string,
  email:string,
  admin:boolean,
  transactionHistory:Array<any>
};

const initialState = {
    users:{},
    loading:false
}as UserState;
const getInforUser = async (userid:string,accessToken:string)=>{
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
export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async ({userid,accessToken}:UserGetInfor,thunkAPI) => {
      const response = await getInforUser(userid,accessToken);
      return response as userData[];
    }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state) => {
      state.users = [];
    },
  },extraReducers: (builder) =>{
    builder.addCase(fetchUser.pending,(state)=>{
        state.loading=true;
      });
      builder.addCase(fetchUser.fulfilled,(state,{payload}) => {
        state.loading = false;
        state.users = payload;
      })
  }
})

// Action creators are generated for each case reducer function
const {reducer,actions} = userSlice;
export const {addUser,removeUser} = actions;
export default reducer;
