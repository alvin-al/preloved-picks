import React from "react";
import { Input } from "./ui/input";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className='h-full flex items-center gap-4 w-[800px] bg-slate-100 rounded-lg px-4 py-2 m-auto border border-gray-300'>
      <FiSearch className='text-2xl' />
      <Input type='search' className='bg-white' placeholder='iPhone 15 Pro' />
    </div>
  );
};

export default SearchBar;
