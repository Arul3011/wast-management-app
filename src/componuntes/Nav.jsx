"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import Cookie from "js-cookie";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [navsts, setNavsts] = useState(false);
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut({
      redirect: true,
      callbackUrl: "/",
    });
    Cookie.remove("email");
  };

  const toggleNav = () => {
    setNavsts(!navsts);
  };

  return (
    <div className="w-[90%] rounded-[10px] px-4 py-2 my-[15px] mb-[20px] m-auto sticky top-1 bg-[#fff] shadow-md">
      {/* Navbar Container */}
      <div className="flex items-center justify-between">
        {/* Logo and Name */}
        <Link href="/" className="flex items-center">
          <img
            src="/pixelcut-export.jpeg"
            alt="logo"
            className="w-[50px] h-[50px] mr-2"
          />
          <p className="text-lg font-semibold sm:text-sm">RECYCLE RALLY</p>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#home"
            className="text-[0.9em] cursor-pointer hover:text-[#189b2c]"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-[0.9em] cursor-pointer hover:text-[#189b2c]"
          >
            About Us
          </a>
          {/* <a
            href="#blog"
            className="text-[0.9em] cursor-pointer hover:text-[#189b2c]"
          >
            Blog
          </a> */}
          <a
            href="#contact"
            className="text-[0.9em] cursor-pointer hover:text-[#189b2c]"
          >
            Contact
          </a>
          {session ? (
            <>
              <Link
                href="/porfile"
                className="px-4 py-2 bg-[#189b2c] text-white rounded-md"
              >
                Profile
              </Link>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 border border-[#189b2c] text-[#189b2c] rounded-md"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/signin"
                className="px-4 py-2 bg-[#189b2c] text-white rounded-md"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 border border-[#189b2c] text-[#189b2c] rounded-md"
              >
                Signup
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleNav}
          className="md:hidden text-[30px] focus:outline-none"
        >
          {navsts ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          navsts ? "flex" : "hidden"
        } md:hidden flex-col items-start mt-4 space-y-4`}
      >
        <a
          href="#home"
          className="text-[0.9em] cursor-pointer hover:text-[#189b2c]"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-[0.9em] cursor-pointer hover:text-[#189b2c]"
        >
          About Us
        </a>
        <a
          href="#blog"
          className="text-[0.9em] cursor-pointer hover:text-[#189b2c]"
        >
          Blog
        </a>
        <a
          href="#contact"
          className="text-[0.9em] cursor-pointer hover:text-[#189b2c]"
        >
          Contact
        </a>
        {session ? (
          <>
            <Link
              href="/porfile"
              className="px-4 py-2 bg-[#189b2c] text-white rounded-md"
            >
              Profile
            </Link>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 border border-[#189b2c] text-[#189b2c] rounded-md"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href="/signin"
              className="px-4 py-2 bg-[#189b2c] text-white rounded-md"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 border border-[#189b2c] text-[#189b2c] rounded-md"
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
