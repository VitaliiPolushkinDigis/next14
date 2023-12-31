import { useCookies } from "next-client-cookies";

const useCookie = () => {
  const cookies = useCookies();

  const getCookie = (key: string) => cookies.get(key);

  const setCookie = (key: string, value: string) => {
    cookies.set(key, value, {
      expires: 2,
      sameSite: "None",
      secure: true,
    });

    console.log("value", value, key);
  };

  const removeCookie = (key: string) => cookies.remove(key);

  return { setCookie, getCookie, removeCookie };
};

export default useCookie;
