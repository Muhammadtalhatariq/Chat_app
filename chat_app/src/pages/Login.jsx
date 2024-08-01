import React from "react";
import add from "../assets/add.png";
const SignUP = () => {
  return (
    <div className="bg-slate-400 w-full min-h-screen " id="login">
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
                placeholder="Enter Your Email"
                type="email"
              />
              <input
                className="border-b-2 p-2 outline-none w-full"
                placeholder="Enter Your password"
                type="password"
              />

              <button
                className="flex justify-center bg-green-600 mt-2 p-2"
                type="submit"
              >
                Sign In
              </button>
            </form>
            <p>
              You do not have an account ? <a href="/Sign_Up">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
