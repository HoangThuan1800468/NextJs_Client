import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export interface AuthState {
  username:string,
  accesstoken:string
}
type authData = any;

const initialState = {
    username:"",
    accesstoken:""
}as AuthState;
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUserAuth: (state, action) => {
      state.username = action.payload.username;
      state.accesstoken = action.payload.accesstoken;
    },
    removeUserAuth: (state,action) => {
        state.username ="";
        state.accesstoken ="";
    }
  }
})

// Action creators are generated for each case reducer function
const {reducer,actions} = authSlice;
export const {addUserAuth,removeUserAuth} = actions;
export default reducer;
