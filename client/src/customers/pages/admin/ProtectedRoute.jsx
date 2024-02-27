import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    // const navigate=
  const user = useSelector((store) => store.userSlice.user);
    if(!user){

    }
  return <Outlet />;
};

export default ProtectedRoute;
