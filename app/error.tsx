"use client";
import React from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div>
      <h1>Error</h1>
      <pre>{error.message}</pre>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Error;
