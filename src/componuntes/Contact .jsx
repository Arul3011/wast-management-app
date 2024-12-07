import React from "react";

function Contact() {
  return (
    <div className="w-full flex justify-center py-[50px]">
      <form className="w-[800px]">
        <div className="flex mb-[20px]">
          <input
            type="text"
            placeholder="Firstname"
            className="w-[50%] h-[40px] p-[10px] text-base border border-black border-[1px] border-green-600 rounded-[6px] mr-[10px]"
          />
          <input
            type="text"
            placeholder="Lastname"
            className="w-[50%] h-[40px] p-[10px] text-base border border-black border-[1px] border-green-600 rounded-[6px]"
          />
        </div>
        <div className="flex mb-[20px]">
          <input
            type="text"
            placeholder="Mobile"
            className="w-[50%] h-[40px] p-[10px] text-base border border-black border-[1px]] border-green-600 rounded-[6px] mr-[10px]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-[50%] h-[40px] p-[10px] text-base border border-black border-[1px] border-green-600 rounded-[6px]"
          />
        </div>
        <textarea
          placeholder="Message"
          className="w-[95%] h-[80px] p-[10px] text-base border border-black border-[1px] block mx-auto border-green-600 rounded-[6px] mb-[20px]"
        ></textarea>
        <div className="flex justify-center">
          <button className="px-[40px] py-[13px] bg-[#189b2c] text-white font-semibold rounded-[7px] cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
