/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuth = useSelector( state => state.isAuth) 

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
