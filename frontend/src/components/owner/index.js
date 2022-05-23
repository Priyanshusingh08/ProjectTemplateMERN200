import React from "react";
import { Outlet } from "react-router-dom";

import Headerowner from "./headerowner";


const Owner = () => {
  return (
    <div>
      <Headerowner/>
      <Outlet />

    </div>
  );
};

export default Owner;