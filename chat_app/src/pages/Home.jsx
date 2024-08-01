import React from "react";
import Sidebar from "../commponent/Sidebar";
import Chat from "../commponent/Chat";
const Home = () => {
  return (
    <div className="home bg-slate-400 w-full min-h-screen flex justify-center items-center ">
      <div className=" border-2">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
