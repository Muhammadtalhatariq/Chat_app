import React from "react";
import Dp from "../assets/dp.jpg";
const Chats = () => {
  return (
    <div className="chats">
      <div className="userchat flex items-center gap-3 p-3 hover:bg-slate-600 cursor-pointer">
        <img className="h-8 w-8 rounded-xl" src={Dp} alt="" />
        <div className="chatinfo">
          <p className="font-bold text-gray-400">Talha</p>
          <p className="text-sm text-white">hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
