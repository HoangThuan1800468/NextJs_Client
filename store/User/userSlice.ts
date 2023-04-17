import { createSlice } from '@reduxjs/toolkit'
import { 
  fetchAddMoney,
  fetchCheckPassword, 
  fetchLoginUser, 
  fetchLogoutUser, 
  fetchProductsOfUser, 
  fetchRegister, 
  fetchUpdateEmail, 
  fetchUpdatePassword, 
  fetchUpdateUserName, 
  fetchUser, 
} from './userThunk';

export interface UserState {
  user: {};
  login:boolean;
  loading: boolean;
  products: Array<any>;
}

const initialState: UserState = {
  user: {},
  login: false,
  products: [],
  loading: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUser: (state, action) => {
      state.user = action.payload;
    }
  },
  extraReducers: (builder) =>{
    // get infor user
    builder
      .addCase(fetchUser.pending,(state)=>{
          state.loading=true;
      })
      .addCase(fetchUser.fulfilled,(state,{payload}) => {
        state.loading = false;
        state.user = payload;
      });
    
    // update infor user
    // 
    // username
    builder
      .addCase(fetchUpdateUserName.pending,(state)=>{
        state.loading=true;
      })
      .addCase(fetchUpdateUserName.fulfilled,(state,{payload}) => {
        state.loading = false;
        state.user = payload;
        
      });
    // email
    builder
      .addCase(fetchUpdateEmail.pending,(state)=>{
        state.loading=true;
      })
      .addCase(fetchUpdateEmail.fulfilled,(state,{payload}) => {
        state.loading = false;
        state.user = payload;
      });
    // password
    builder
      .addCase(fetchUpdatePassword.pending,(state)=>{
        state.loading=true;
      })
      .addCase(fetchUpdatePassword.fulfilled,(state,{payload}) => {
        state.loading = false;
        state.user = payload;
      });
    // add money
    builder
    .addCase(fetchAddMoney.pending,(state)=>{
      state.loading=true;
    })
    .addCase(fetchAddMoney.fulfilled,(state,{payload}) => {
      state.loading = false;
      state.user = payload;
      console.log(state.user)
      console.log(payload)
    });
    // get products of user
    builder
      .addCase(fetchProductsOfUser.pending,(state)=>{
          state.loading=true;
      })
      .addCase(fetchProductsOfUser.fulfilled,(state,{payload}) => {
        state.loading = false;
        state.products = payload;
      });
    // login
    builder
      .addCase(fetchLoginUser.pending,(state)=>{
        state.loading=true;
      })
      .addCase(fetchLoginUser.fulfilled,(state,{payload}) => {
        state.loading = false;
        state.login = true;
        state.user = payload;
      });
    // check password
    builder
      .addCase(fetchCheckPassword.pending,(state)=>{
        state.loading=true;
      })
      .addCase(fetchCheckPassword.fulfilled,(state) => {
        state.loading = false;
      });
    // logout
    builder
      .addCase(fetchLogoutUser.pending,(state)=>{
        state.loading=true;
      })
      .addCase(fetchLogoutUser.fulfilled,(state) => {
        state.loading = false;
        state.login = true;
        state.user = {};
      });
      
    // register
    builder
      .addCase(fetchRegister.pending,(state)=>{
        state.loading=true;
      })
      .addCase(fetchRegister.fulfilled,(state,{payload}) => {
        state.loading = false;
        state.login = true;
        state.user = payload;
      });
  }
})

// Action creators are generated for each case reducer function
const {reducer,actions} = userSlice;
export const {changeUser} = actions;
export default reducer;
