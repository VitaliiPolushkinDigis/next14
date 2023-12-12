"use server";
export const getServerPathName = () => {
  const headersList = headers();
  const headerUrl = headersList.get("referer");
  const currentPathName = "/" + headerUrl?.split("/").slice(3).join("/");
  return currentPathName;
};
