import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../API/client";

export const signIn = createAsyncThunk("@@user/signIn", (email, userType) => {
  return client("accounts/login", {
    body: {
      email: email,
      referrer: "none",
      userType: typeof userType === "string" ? userType : "individual",
    },
  }).then((res) => res);
});

const initialState = {
  status: "idle",
  error: null,
  userType: "individual",
  success: false,
  referral: "",
};

const userSlice = createSlice({
  name: "@@user",
  initialState,
  reducers: {
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
    setUserEmail: (state, action) => {
      state.email = action.payload;
    },
    setReferral: (state, action) => {
      if (!state.referral) {
        state.referral = action.payload;
      } else return;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.meta.error;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.success = action.payload.success;
        state.status = "fulfilled";
        state.error = null;
      });
  },
});
export const { setUserType, setUserEmail, setReferral } = userSlice.actions;
export const getUserReducer = userSlice.reducer;
