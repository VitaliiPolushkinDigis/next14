"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useUser } from "../../hooks/useUser";

export default function Home() {
  const { user } = useUser();
  return (
    <div className={styles.main}>
      Home Page
      <p className="my-5 text-sm font-mono">
        Cookie-user:{JSON.stringify(user)}
      </p>
    </div>
  );
}
