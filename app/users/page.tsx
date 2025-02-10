import React, { Suspense } from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const UserPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <h1>Users</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
};

export default UserPage;
