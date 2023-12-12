/* import { getServerPathName } from "@/server-actions/get-path-name"; */
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  /*    const pathname= getServerPathName() */
  return (
    <aside>
      <div>
        <Link href={"/friends"}>Friends</Link>
        <Link href={"/conversations"}>Conversations</Link>
        <Link href={"/settings"}>Settings</Link>
        <Link href={"/login"}>Login</Link>
      </div>
    </aside>
  );
};

export default Sidebar;
