import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { getInforUser } from './userService';
import { fetchUser } from './userThunk';

export interface UserState {
    users:Array<any>,
    loading:boolean
}



const initialState = {
    users:{},
    loading:false
}as UserState;



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
