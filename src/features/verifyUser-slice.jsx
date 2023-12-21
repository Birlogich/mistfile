import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../API/client";

export const verifyUser = createAsyncThunk("@@user/verifyUser", (data) => {
  return client("accounts/verifylogin", {
    body: {
      email: data.email,
      token: data.token,
    },
    headers: { "User-Agent": "insomnia/8.3.0" },
  });
});

const initialState = {
  apikey: null,
  referral: null,
  email: null,
  subscription: null,
};

const verifyUserSlice = createSlice({
  name: "@@user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(verifyUser.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(verifyUser.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.meta.error;
      })
      .addCase(verifyUser.fulfilled, (state, action) => {
        if (!state.apikey) {
          state.email = action?.meta.arg.email;
          state.status = "fulfilled";
          state.error = null;
          state.apikey = action?.payload?.apikey;
          state.referral = action?.payload?.referral;
          state.subscription = action?.payload?.subscription;
        } else {
          return;
        }
      });
  },
});

export const verifyUserReducer = verifyUserSlice.reducer;
