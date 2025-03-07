import Link from "next/link";
import React from "react";

const FOne = () => {
  return (<div>
    <h1>FOne Component</h1>
    <Link href='/f1/f2' className="py-1 bg-white text-black rounded-md px-2">To Folder Two</Link>
  </div>);
};

export default FOne;

