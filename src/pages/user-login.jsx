import UserLoginComponent from "@/components/Login/UserLogin";
import TitlePage from "@/core/components/TitlePage";
import React from "react";

function login() {
  return (
    <>
      <TitlePage text="Login Page" />
      <UserLoginComponent />
    </>
  );
}

export default login;
