import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  autorization: false,
};

const userSetAutorization = createSlice({
  name: "@@autorization",
  initialState,
  reducers: {
    setUserAutorization: (state, action) => {
      state.autorization = action.payload;
    },
  },
});
export const { setUserAutorization } = userSetAutorization.actions;
export const getUserAutorization = userSetAutorization.reducer;
