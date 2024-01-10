import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/config.js";
import { logout } from "../../store/authSlice.js";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logOutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full ">
      LogOut
    </button>
  );
};

export default LogoutBtn;
