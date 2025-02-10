import Link from "next/link";
import React from "react";

const Navbar = () => {
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
    </div>
  );
};

export default Navbar;
