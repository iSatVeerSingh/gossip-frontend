import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userAccountApi } from "./userAccountApi";

export const store = configureStore({
  reducer: {
    [userAccountApi.reducerPath]: userAccountApi.reducer
  },
  middleware: (getDefaultMid) => getDefaultMid().concat(userAccountApi.middleware),
});

setupListeners(store.dispatch);
