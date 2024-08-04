import React from "react";
import Dp from "../assets/dp.jpg";
const Search = () => {
  return (
    <div className="Search border-b-2 border-white  ">
      <div className="Searchform ">
        <input
          placeholder="find a user"
          className="bg-transparent outline-none px-3 py-2"
          type="text"
        />
      </div>
      <div className="userchat flex items-center gap-3 p-3 hover:bg-slate-600 cursor-pointer">
        <img
        className="h-8 w-8 rounded-xl"
        src={Dp} alt="" />
        <div className='chatinfo'>
        <p className='font-bold text-gray-400'>Talha</p>
        </div>
       
      </div>
    </div>
  );
};

export default Search;
