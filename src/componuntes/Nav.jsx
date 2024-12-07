import React from "react";

function Nav() {
  return (
    <div className="flex w-[90%] h-[20px] px-0 my-[15px] mb-[20px]">
      <div className="flex w-[50%]">
        <img
          src="/pixelcut-export.jpeg"
          alt="logo"
          className="w-[100px] h-[70px] mt-[-10px]"
        />
        <p className="mt-[15px]">RECYCLE RALLY</p>
      </div>
      <div className="flex justify-between w-[50%]">
        <a className="w-[150px] h-[40px] rounded-[5px] mt-[10px] text-[0.9em] cursor-pointer hover:text-[#189b2c]">
          Home
        </a>
        <a className="w-[150px] h-[40px] rounded-[5px] mt-[10px] text-[0.9em] cursor-pointer hover:text-[#189b2c]">
          About Us
        </a>
        <a className="w-[150px] h-[40px] rounded-[5px] mt-[10px] text-[0.9em] cursor-pointer hover:text-[#189b2c]">
          Blog
        </a>
        <a className="w-[150px] h-[40px] rounded-[5px] mt-[10px] text-[0.9em] cursor-pointer hover:text-[#189b2c]">
          Contact
        </a>
        <button className="w-[100px] h-[35px] rounded-[5px] m-[0_10px] bg-[#189b2c] text-white border-none">
          Login
        </button>
        <button className="w-[100px] h-[35px] rounded-[5px] m-[0_10px] bg-white border-[#81d98e] border-solid font-semibold">
          Signup
        </button>
      </div>
    </div>
  );
}

export default Nav;
