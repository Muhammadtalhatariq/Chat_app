import React from "react";
import { FaRegImages } from "react-icons/fa6";
import { IoMdAttach } from "react-icons/io";
const Input = () => {
  return (
    <div className="Input bg-white px-2 py-4">
      <div className="flex">
        <input
          className="p-2 w-full outline-none"
          type="text"
          placeholder="Write something...."
        />
        <div className="send flex items-center gap-2">
          <IoMdAttach size={30} className="cursor-pointer" />
          <FaRegImages size={30} className="cursor-pointer"  />
          <button className="bg-green-500 p-1 rounded-lg cursor-pointer">send</button>
        </div>
      </div>
    </div>
  );
};

export default Input;
