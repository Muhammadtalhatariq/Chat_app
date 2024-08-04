import React from "react";
import Dp from "../assets/dp.jpg";

const Message = () => {
  return (
    <div className="message mt-4">
      {/* person message  */}
      <div className="flex items-center">
        <div className="messageinfo p-3">
          <img
            className="h-14 w-14 rounded-3xl cursor-pointer "
            src={Dp}
            alt=""
          />
          <span className="text-gray-500">just now</span>
        </div>
        <div className="messagecontent">
          <span className="bg-slate-300 p-2 rounded-r-lg ">hey...</span>
          <img className="w-[60%] h-[80%] rounded-xl mt-4" src={Dp} alt="" />
        </div>
      </div>
      {/* owner message  */}
      <div className=" flex flex-row-reverse items-center pt-3">
        <div className="messageinfo p-3">
          <img
            className="h-14 w-14 rounded-3xl  cursor-pointer"
            src={Dp}
            alt=""
          />
          <span className="text-gray-500">just now</span>
        </div>
        <div className="messagecontent flex flex-col items-end ">
          <span className="bg-slate-300 p-2 rounded-l-lg mb-3 ">hello</span>
          <img className=" w-[60%] h-[80%] rounded-xl" src={Dp} alt="" />
        </div>
      </div>
      {/* person message  */}
      <div className="flex items-center">
        <div className="messageinfo p-3">
          <img
            className="h-14 w-14 rounded-3xl cursor-pointer"
            src={Dp}
            alt=""
          />
          <span className="text-gray-500">how are you</span>
        </div>
        <div className="messagecontent">
          <span className="bg-slate-300 p-2 rounded-r-lg ">i am fine</span>
          {/* <img 
        className="w-[60%] h-[80%] rounded-xl"
        src={Dp} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Message;
