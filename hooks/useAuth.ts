import { useUser } from "./useUser";

import axios, { AxiosRequestConfig } from "axios";
import { AuthResponse, TLogin, TRegister } from "@/utils/types/types";
import useCookie from "./useCookies";

const API_URL = "http://localhost:3001/api/"; /* || config.BACKEND_URL; */
/* "https://blind-talk-release-bf030d3b1b76.herokuapp.com/api/" */ const config: AxiosRequestConfig =
  {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Origin": "https://localhost:3000",
      "Content-Type": "application/json",
    },
  };

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();

  const { getCookie } = useCookie();

  const refresh = () => {
    let existingUser = null;
    const getFromCookie = async () => (existingUser = getCookie("user"));
    getFromCookie();

    if (existingUser) {
      try {
        addUser(JSON.parse(existingUser));
      } catch (e) {
        console.log(e);
      }
    }
  };

  const register = async (creds: TRegister) => {
    return await axios
      .post(`${API_URL}auth/register`, creds, config)
      .then((res) => {
        if (res.data?.data && res.data.data?.token) addUser(res.data.data);
        return res.data as AuthResponse;
      })
      .catch((err) => {
        if (err && err?.response && err.response?.data)
          return { ...err.response.data, success: false } as AuthResponse;
        else return err as AuthResponse;
      });
  };

  const login = async (creds: TLogin) => {
    return await axios
      .post(`${API_URL}auth/login`, creds, config)
      .then((res) => {
        /*   if (res.data?.data && res.data.data?.token) addUser(res.data.data); */
        return res.data as string;
      })
      .catch((err) => {
        if (err && err?.response && err.response?.data)
          return { ...err.response.data, success: false } as AuthResponse;
        else return err as AuthResponse;
      });
  };
  const getStatus = async () => {
    return await axios
      .get(`${API_URL}auth/status`, config)
      .then((res) => {
        console.log(res);

        if (res.data && res.data.id) addUser(res.data);
        return res.data as AuthResponse;
      })
      .catch((err) => {
        if (err && err?.response && err.response?.data)
          return { ...err.response.data, success: false } as AuthResponse;
        else return err as AuthResponse;
      });
  };

  const logout = () => {
    removeUser();
  };

  return { getStatus, user, login, register, logout, refresh };
};
