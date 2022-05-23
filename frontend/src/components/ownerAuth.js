import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const OwnerAuthorisor = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("owner"))
  );
  console.log(currentUser);

  if (currentUser === null) {
    Swal.fire({
      icon: "info",
      title: "OOops!!",
      text: "You need to be an Owner",
    });
    return <Navigate to="/main/ownerlogin" />;
  }

  return children;
};

export default OwnerAuthorisor;
