import Link from "next/link";
import React, { useRef } from "react";
import { CgProfile } from "react-icons/cg";
function OtherNav() {
    const session = true
     const dialogRef = useRef(null);

     const openDialog = () => {
    dialogRef.current.showModal();
  };

  // Close the dialog
  const closeDialog = () => {
    dialogRef.current.close();
    }
  return (
    <div className="flex w-[90%] h-[20px] px-0 my-[15px] mb-[20px]">
      <Link href='/' className="flex w-[50%]">
        <img
          src="/pixelcut-export.jpeg"
          alt="logo"
          className="w-[100px] h-[70px] mt-[-10px]"
        />
        <p className="mt-[15px]">RECYCLE RALLY</p>
      </Link>
      <div className="flex justify-end w-[50%]">
        {/* <a className="w-[150px] h-[40px] rounded-[5px] mt-[10px] text-[0.9em] cursor-pointer hover:text-[#189b2c]">
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
        </a> */}

          {!session ? (
        <>
          <button className="w-[100px] h-[35px] rounded-[5px] m-[0_10px] bg-[#189b2c] text-white border-none">
            Login
          </button>
          <button className="w-[100px] h-[35px] rounded-[5px] m-[0_10px] bg-white border-[#189b2c] border-solid border-[1px] font-semibold">
            Signup
          </button>
        </>
      ) : (
        <span onClick={openDialog}> <CgProfile size={35}  /> </span>
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
