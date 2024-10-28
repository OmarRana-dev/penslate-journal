import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import authService from "../appwrite/authService";

function Logout() {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return <div onClick={handleSubmit}>Logout</div>;
}

export default Logout;
