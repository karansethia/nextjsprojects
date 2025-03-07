import React from "react";

const CustomerDetailsLayout = ({ children, modal }: {
  children: React.ReactNode,
  modal: React.ReactNode
}) => {
  return <div className="w-full flex flex-col items-center justify-center">
    {modal}
    <h2 className="text-2xl text-white font-semibold py-10">Employee List</h2>
    {children}</div>;
};

export default CustomerDetailsLayout;

