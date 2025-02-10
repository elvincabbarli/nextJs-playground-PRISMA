import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: number;
  };
}

const UserDetails = ({ params: { id } }: Props) => {
  if (id > 10) return notFound();
  return <div>UserDetails {id}</div>;
};

export default UserDetails;
