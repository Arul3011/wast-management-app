"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Cookie from "js-cookie";
import { FaBars, FaTimes } from "react-icons/fa";

function OtherNav() {
  const { data: session } = useSession();
  const dialogRef = useRef(null);
  const [navOpen, setNavOpen] = useState(false);

  // Toggle the mobile navigation
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  // Open the dialog
  const openDialog = () => {
    dialogRef.current.showModal();
  };

  // Close the dialog
  const closeDialog = () => {
    dialogRef.current.close();
  };

  const handleSignOut = async () => {
    await signOut({
      redirect: true, // Automatically redirect after sign-out
      callbackUrl: "/",
    });
    Cookie.remove("email");
  };

  return (
    <div className="flex w-[90%] h-[20px] px-0 my-[15px] mb-[20px] m-[auto] justify-between">
      {/* Logo and Name */}
      <Link href="/" className="flex items-center w-[50%]">
        <img
          src="/pixelcut-export.jpeg"
          alt="logo"
          className="w-[100px] h-[70px] mt-[-10px]"
        />
        <p className="mt-[15px] sm:text-xs text-sm">RECYCLE RALLY</p>
      </Link>

      {/* Desktop Navbar (hidden on mobile) */}
      <div className="sm:flex hidden justify-end w-[50%]">
        {session ? (
          <>
            <span>
              <Link
                href="/profile"
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

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end w-[30%]">
        <button onClick={toggleNav}>
          {navOpen ? <FaTimes className="text-[30px]" /> : <FaBars className="text-[30px]" />}
        </button>
      </div>

      {/* Mobile Menu - Dialog */}
      <dialog ref={dialogRef} className={`bg-white p-6 rounded-lg shadow-lg max-w-sm w-[300px] mx-auto z-50 ${navOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center">
          {session ? (
            <>
              <Link
                href="/profile"
                className="w-full py-2 text-center bg-[#189b2c] text-white rounded-md mb-2"
              >
                Profile
              </Link>
              <button
                onClick={handleSignOut}
                className="w-full py-2 text-center border border-[#189b2c] text-[#189b2c] rounded-md"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/api/auth/signin"
                className="w-full py-2 text-center bg-[#189b2c] text-white rounded-md mb-2"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="w-full py-2 text-center border border-[#189b2c] text-[#189b2c] rounded-md"
              >
                Signup
              </Link>
            </>
          )}
          <button onClick={toggleNav} className="mt-4 text-gray-500">
            Close
          </button>
        </div>
      </dialog>
    </div>
  );
}

export default OtherNav;
