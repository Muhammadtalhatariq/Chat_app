import React from "react";
import Dp from "../assets/dp.jpg";
const Navbar = () => {
  return (
    <div className="Navbar bg-slate-600 p-3 text-white">
      <div className="flex justify-between items-center">
        <div className="logo text-lg text-gray-400 font-bold hidden md:block ">Lama Chat</div>
        <div className="flex items-center gap-3 ">
          <img className="h-8 w-8 rounded-xl" src={Dp} alt="" />
          <p className="text-lg text-gray-400 font-bold">Talha</p>
          <button className="bg-green-500 hover:bg-green-600 p-2 rounded-2xl cursor-pointer absolute bottom-2 left-1 ">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
