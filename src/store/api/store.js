import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import authApi from "../features/auth/authApi";
import authreducer from "../features/auth/authSlice";
const store = configureStore({
  reducer: {
    auth: authreducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
