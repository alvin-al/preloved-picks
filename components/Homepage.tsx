import React from "react";
import { Input } from "./ui/input";
import SearchBar from "./SearchBar";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className='flex flex-col h-full gap-8'>
      <div>
        <SearchBar />
      </div>
      <div>
        <Slider />
      </div>
      <div>Banner</div>
    </div>
  );
};

export default Home;
