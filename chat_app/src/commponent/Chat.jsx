import React from "react";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Messages from "../commponent/Messages";
import Input from "../commponent/Input";
const Chat = () => {
  return (
    <div className="chat flex-2 w-[70%] bg-slate-400 ">
      <div className="chatinfo bg-slate-600 p-3 flex justify-between">
        <span className="font-bold text-2xl text-gray-400">Talha</span>
        <div className="chaticons flex gap-2">
          <MdOutlineVideoCall className="text-white cursor-pointer" size={30} />
          <IoMdPersonAdd className="text-white cursor-pointer" size={30} />
          <HiOutlineDotsHorizontal
            className="text-white cursor-pointer"
            size={30}
          />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
