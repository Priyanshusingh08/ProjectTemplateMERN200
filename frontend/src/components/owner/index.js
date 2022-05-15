import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../main/header";


const Owner = () => {
  return (
    <div>
      <Header/>
      <Outlet />
    </div>
  );
};

export default Owner;