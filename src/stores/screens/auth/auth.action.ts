import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import AUTH_API from "./auth.api";
import { LOCAL_STORAGE_KEY } from "src/constants";

export const loginAction = createAsyncThunk<any, Auth.LoginRequestPayload>(
  "auth_login",
  async ({ data, callback = () => {} }, { rejectWithValue }) => {
    try {
      const response: Auth.LoginResponse = await AUTH_API.loginAPI(data);

      if (response?.access_token) {
        await localStorage.setItem(
          LOCAL_STORAGE_KEY.TOKEN,
          response.access_token
        );

        callback();
      }

      return response;
    } catch (err: any) {
      toast.error(err?.message);

      rejectWithValue(err?.response?.data || err?.name);
    }
  }
);

export const getMeAction = createAsyncThunk<any>(
  "me",
  async (_, { rejectWithValue }) => {
    try {
      const res = await AUTH_API.getMeAPI();

      return res;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  }
);

export const logOutAction = createAsyncThunk<any, Auth.LogoutRequestPayload>(
  "auth_logout",
  async ({ callback = () => {} }, { rejectWithValue }) => {
    try {
      const res = await AUTH_API.logoutAPI();

      if (res) {
        callback();
      }

      return res;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  }
);
