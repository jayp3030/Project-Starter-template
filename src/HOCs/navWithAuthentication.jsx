/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */

import Navbar from "../layout/Navbar";
import { useSelector } from "react-redux";

const navWithAuthentication = (WrappedComp) => {
  return (props) => {
    return (
      <>
        <Navbar/>
        <WrappedComp {...props}  />
      </>
    );
  };
};

export default navWithAuthentication;
