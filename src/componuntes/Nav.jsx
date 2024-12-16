"use client"; 

import { useSession } from "next-auth/react";
import Link from "next/link";

const Nav = () => {
  const { data: session, status } = useSession();
  return (
    <div className="flex w-[90%] h-[20px] px-0 my-[15px] mb-[20px]">
      <Link href="/" className="flex w-[50%]">
        <img
          src="/pixelcut-export.jpeg"
          alt="logo"
          className="w-[100px] h-[70px] mt-[-10px]"
        />
        <p className="mt-[15px]">RECYCLE RALLY</p>
      </Link>
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
       { session ? (
          <>
            <span>
              <Link
                href="/porfile"
                className="w-[100px] h-[35px] rounded-[5px] m-[0_10px] bg-[#189b2c] text-white border-none flex justify-center items-center"
              >
                Profile
              </Link>
            </span>
            <span>
              <Link
                href="/api/auth/signout"
                 className="w-[100px] h-[35px] rounded-[5px] m-[0_10px] bg-white border-[#189b2c] border-solid border-[1px] font-semibold flex justify-center items-center"
              >
                Logout
              </Link>
            </span>
          </>
        ) : (
          <>
            <Link
              href="/api/auth/signin"
              className="w-[100px] h-[35px] rounded-[5px] m-[0_10px] bg-[#189b2c] text-white border-none flex justify-center items-center"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="w-[100px] h-[35px] rounded-[5px] m-[0_10px] bg-white border-[#189b2c] border-solid border-[1px] font-semibold flex justify-center items-center"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
