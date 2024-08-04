import React from "react";
import Navbar from "../commponent/Navbar";
import Search from "../commponent/Search";
import Chats from "../commponent/Chats"
const sidebar = () => {
  return (
    <div className="w-[30%] bg-slate-500 relative">
      <Navbar />
      <Search />
      <Chats/>
    </div>
  );
};

export default sidebar;
