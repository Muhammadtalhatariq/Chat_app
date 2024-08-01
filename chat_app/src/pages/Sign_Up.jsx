import React from "react";
import add from "../assets/add.png"
const SignUP = () => {
  return (
    <div className="bg-slate-400 w-full min-h-screen" id="Sign_Up">
      <div className="flex justify-center items-center py-28">
        <div className="bg-white pt-3">
          <span className=" flex justify-center text-2xl text-gray-400 font-extrabold">
            Lama Chat
          </span>

          <span className=" flex justify-center text-xl text-gray-500">
            SignUp
          </span>
          <div className="p-6">
            <form className="flex flex-col" action="">
              <input
                className="border-b-2 p-2 outline-none"
                placeholder="Enter Your Name"
                type="text"
              />
              <input
                className="border-b-2 p-2 outline-none"
                placeholder="Enter Your Email"
                type="email"
              />
              <input
                className="border-b-2 p-2 outline-none w-full"
                placeholder="Enter Your password"
                type="password"
              />
              <input
                className="hidden"
                type="file"
                id="file"
              />
              <label className="flex items-center pt-2 gap-2" htmlFor="file">
                <img 
                className="h-6 w-6 rounded-3xl"
                src={add} alt="" />
                <span> Add an avatar</span>
              </label>
              

              <button className="flex justify-center bg-green-600 mt-2 p-2" type="submit">Sign Up</button>
            </form>
            <p>You do have an account ? <a href="/Login">Login</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
