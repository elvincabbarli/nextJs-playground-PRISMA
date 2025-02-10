import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div style={{ display: "flex" }}>
      <aside>
        <nav>
          <ul>
            <li>
              <Link href="/admin">Admin</Link>
            </li>
            <li>
              <Link href="/admin/users">Users</Link>
            </li>
            <li>
              <Link href="/admin/products">Products</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
