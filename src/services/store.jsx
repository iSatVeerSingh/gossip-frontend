import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userAccountApi } from "./userAccountApi";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    [userAccountApi.reducerPath]: userAccountApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMid) =>
    getDefaultMid().concat(userAccountApi.middleware),
});

setupListeners(store.dispatch);
