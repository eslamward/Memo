import React from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../store/features/auth/authSlice";
import Login from "../pages/Login";
import { Navigate, Outlet, useLocation } from "react-router";

function RequireAuth() {
  const token = useSelector(selectToken);
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
}

export default RequireAuth;
