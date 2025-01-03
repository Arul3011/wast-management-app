"use client"; 
import { FaBars } from "react-icons/fa";
import Cookie from "js-cookie";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Nav = () => {
  const { data: session, status } = useSession();
   const handleSignOut = async () => {
        
        await signOut({
          redirect: true,  
          callbackUrl: "/", 
        });
        Cookie.remove("email")
      };
  return (
    <div className="flex w-[90%] rounded-[10px] h-[auto] px-0 my-[15px] mb-[20px] m-[auto] justify-between sticky top-1 items-center bg-[#fff]">
      <Link href="/" className="flex w-[50%]">
        <img
          src="/pixelcut-export.jpeg"
          alt="logo"
          className="w-[100px] ml-[10px] h-[70px] mt-[-10px]"
        />
        <p className="mt-[15px] sm:text-xs text-sm" >RECYCLE RALLY</p>
      </Link>
     
      <div className="md:flex hidden justify-between w-[50%]">
        <a href="#home" className="w-[150px] h-[40px] rounded-[5px] mt-[10px] text-[0.9em] cursor-pointer hover:text-[#189b2c]">
          Home
        </a>
        <a href="#about" className="w-[150px] h-[40px] rounded-[5px] mt-[10px] text-[0.9em] cursor-pointer hover:text-[#189b2c]">
          About Us
        </a>
        <a href="#blog" className="w-[150px] h-[40px] rounded-[5px] mt-[10px] text-[0.9em] cursor-pointer hover:text-[#189b2c]">
          Blog
        </a>
        <a href="#contact" className="w-[150px] h-[40px] rounded-[5px] mt-[10px] text-[0.9em] cursor-pointer hover:text-[#189b2c]">
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
            <button
                onClick={handleSignOut}
                 className="w-[100px] h-[35px] rounded-[5px] m-[0_10px] bg-white border-[#189b2c] border-solid border-[1px] font-semibold flex justify-center items-center"
              >
                Logout
              </button>
            </span>
          </>
        ) : (
          <>
            <Link
              href="/signin"
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
      <div className="md:hidden flex justify-end w-[30%]  ">
      <FaBars className="text-[30px]" />
      </div>
      </div>
    
  );
};

export default Nav;
