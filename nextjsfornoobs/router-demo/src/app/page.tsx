import Link from "next/link";
import React from "react";

const Home = () => {
  return (<div className="bg-gray-900 w-full h-[100svh]">
    <h1 className="w-full text-center text-4xl font-bold py-4 text-white">Employee List App</h1>
    <div className="flex w-full justify-center">
      <Link href='/customer-details' className="bg-yellow-200 py-2 px-4 font-semibold rounded-md" >Details</Link>
    </div>
  </div>
  );
};

export default Home;

