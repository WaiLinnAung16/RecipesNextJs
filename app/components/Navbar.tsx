import React from "react";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="my-3 w-full fixed top-0 flex justify-center z-[60]">
      <div className=" w-full max-w-96 bg-slate-50 flex items-center rounded-full px-3 shadow-sm group transition-all hover:ring-1">
        <CiSearch className="text-2xl text-slate-600 group-hover:text-sky-800" />
        <input
          type="text"
          className=" outline-none rounded-full p-2 font-sans bg-transparent w-full"
          placeholder="Search for delicious recipes..."
        />
      </div>
    </div>
  );
};

export default Navbar;
