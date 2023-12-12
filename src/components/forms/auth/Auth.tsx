"use client";
import React, { FC } from "react";

interface IAuth {
  type: "login" | "register";
}

const Auth: FC<IAuth> = ({ type = "login" }) => {
  return <div>{type}</div>;
};

export default Auth;
