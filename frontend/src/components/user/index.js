import React from "react";
import { Outlet } from "react-router-dom";
import Headeruser from "./headeruser";

const User = () => {
  return (
    <div>
      <Headeruser />
      <Outlet />
    </div>
  );
};

export default User;