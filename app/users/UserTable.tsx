import { sort } from "fast-sort";
import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: User[] = await res.json();

  const sortedUser = sort(users).asc(
    sortOrder === "name" ? (user) => user.name : (user) => user.email
  );
  return (
    <div>
      <Link style={{ backgroundColor: "rebeccapurple" }} href="/users/new">
        New Users
      </Link>
      <table border={1}>
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
        {sortedUser.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default UserTable;
