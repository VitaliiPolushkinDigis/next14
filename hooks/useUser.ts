import { cookies } from "next/headers";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import useCookie from "./useCookies";
import { AuthUser } from "@/utils/types/types";

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setCookie, removeCookie, getCookie } = useCookie();

  const addUser = (user: AuthUser) => {
    console.log("addUser", user);

    setUser(user);
    setCookie("user", JSON.stringify(user));
    const c = getCookie("user");
    console.log("c", c);
  };

  const removeUser = () => {
    setUser(null);
    removeCookie("user");
  };

  return { user, addUser, removeUser };
};
