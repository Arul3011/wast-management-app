"use client"
import Link from "next/link";
import React, { useRef } from "react";
import { useSession } from "next-auth/react";
import { CgProfile } from "react-icons/cg";
import { signOut } from "next-auth/react";
import Cookie from "js-cookie";
function OtherNav() {
  const { data: session, status } = useSession();
    
     const dialogRef = useRef(null);

     const openDialog = () => {
    dialogRef.current.showModal();
  };

  // Close the dialog
  const closeDialog = () => {
    dialogRef.current.close();
    }
    const handleSignOut = async () => {
      
      await signOut({
        redirect: false,  // Automatically redirect after sign-out
        callbackUrl: "/", 
      });
     Cookie.remove("email")
    };
  return (
    <div className="flex w-[90%] h-[20px] px-0 my-[15px] mb-[20px] m-[auto]">
      <Link href='/' className="flex w-[50%]">
        <img
          src="/pixelcut-export.jpeg"
          alt="logo"
          className="w-[100px] h-[70px] mt-[-10px]"
        />
        <p className="mt-[15px]">RECYCLE RALLY</p>
      </Link>
      <div className="flex justify-end w-[50%]">
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
                // href="/api/auth/signout"
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
      <dialog   ref={dialogRef}   className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto z-50">
        test
        <button onClick={closeDialog}>
       close
          </button>
      </dialog>
    </div>
  );
}

export default OtherNav;
