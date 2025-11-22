import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredinitail, logout } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  console.log(result.error.status);
  if (result?.error?.status === 403) {
    console.log("sending refresh token");
    const token = await baseQuery("/auth/refresh", api, extraOptions);
    if (token?.data) {
      const { user, accessToken } = token.data;
      api.dispatch(setCredinitail({ user, accessToken }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});

export default apiSlice;
