import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUserGlobal: (state, action) => {
      state.loggedInUser = action.payload;
    },
  },
});

export const { loginUserGlobal } = userSlice.actions;
export default userSlice.reducer;
