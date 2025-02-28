"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status, data: session } = useSession();
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        display: "flex",
        gap: "10px",
        padding: "10px",
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/users">Users</Link>
      <Link href="/upload">Upload Photo</Link>
      {status === "authenticated" && <div>{session?.user?.name}</div>}
      {status === "authenticated" && (
        <Link href="/api/auth/signout">Logout</Link>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}
      {status === "loading" && <div>Loading...</div>}
    </div>
  );
};

export default Navbar;
