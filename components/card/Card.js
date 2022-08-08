import React from "react";

export const Card = ({ children }) => {
  return (
    <div className="rounded-lg bg-gray-300 shadow-md p-5 m-5">{children}</div>
  );
};
