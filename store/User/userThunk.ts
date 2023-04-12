import { createAsyncThunk } from "@reduxjs/toolkit";
import { getInforUser } from "./userService";

type userData = any;
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