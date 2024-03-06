/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */

import { useState } from "react";
import Navbar from "../layout/Navbar";
import { useSelector } from "react-redux";

const navWithAuthentication = (WrappedComp) => {
  return (props) => {
    const isAuth = useSelector((state) => state.isAuth);

    return (
      <>
        <Navbar isAuth={isAuth} />
        <WrappedComp {...props}  />
      </>
    );
  };
};

export default navWithAuthentication;
