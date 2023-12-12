import React, { FC, PropsWithChildren } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <main style={{ display: "flex" }}>
      <Sidebar />
      <section style={{ minHeight: "100vh" }}>{children}</section>
    </main>
  );
};

export default Layout;
