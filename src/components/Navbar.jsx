import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!false);
  };
  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        Atikur's Portfolio
      </h1>
      <ul className="flex hidden">
        <li className="p-4">Home</li>
        <li className="p-4">Projects</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
        <li className="p-4">Resources</li>
      </ul>

      <div onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className="fixed left-0 top-0 w-[60%] m-4  border-r border-r-gray-900 bg-[#000300] h-full">
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Projects</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
          <li className="p-4 ">Resources</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
