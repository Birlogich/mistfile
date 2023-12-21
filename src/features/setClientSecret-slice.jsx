import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clientSecret: "",
};

const clientSecretSlice = createSlice({
  name: "@@clientSecret",
  initialState,
  reducers: {
    setClientSecretAction: (state, action) => {
      if (state.clientSecret === "") {
        state.clientSecret = action.payload;
      } else {
        return;
      }
    },
  },
});
export const { setClientSecretAction } = clientSecretSlice.actions;
export const clientSecretReducer = clientSecretSlice.reducer;
