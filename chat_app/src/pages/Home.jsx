import React from "react";
import Sidebar from "../commponent/Sidebar";
import Chat from "../commponent/Chat";
const Home = () => {
  return (
    <div className="">
      <div className="flex border-2 w-full h-[100vh] overflow-hidden mb-3">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
