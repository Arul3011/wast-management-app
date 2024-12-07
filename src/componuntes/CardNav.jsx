import React from "react";
import Link from "next/link";
function Bsm() {
 

  return (
    <div className="flex justify-around items-center flex-wrap my-[60px] gap-[20px] w-[94%] mx-auto">
    
      <div className="bg-[#189b2c] w-[400px] rounded-[20px] p-[15px]">
        <h2 className="text-white text-center mb-[15px]">Buy Material</h2>
        <ul className="text-white text-center mb-[10px] px-[20px] list-disc list-inside">
          <li>All Waste Trade buyers are fully accredited and certified</li>
          <li>All sellers are fully vetted to ensure accurate listings</li>
          <li>Year-round access to thousands of tonnes of materials</li>
          <li>Filter by precise specifications to find suitable listings</li>
        </ul>
        <div className="flex justify-center p-[10px_0]">
         <Link href='/buy'
  className="w-[110px] h-[35px]  bg-white text-[15px] flex justify-center items-center text-[#189b2c] font-semibold rounded-[7px] border-none cursor-pointer"
          >
            Buy Material
          </Link>
        </div>
      </div>

     
      <div className="bg-[#189b2c] w-[400px] rounded-[20px] p-[15px]">
        <h2 className="text-white text-center mb-[15px]">Sell Material</h2>
        <ul className="text-white text-center mb-[10px] px-[20px] list-disc list-inside">
          <li>Access our global network of verified recycling facilities</li>
          <li>Maximise the value of your waste commodities specifications</li>
          <li>Recycle your materials ethically with full transparency</li>
          <li>A carbon-efficient circular economy for your waste</li>
        </ul>
        <div className="flex justify-center p-[10px_0]">
          <Link href='/sell'
           
            className="w-[110px] h-[35px] bg-white text-[15px] flex justify-center items-center text-[#189b2c] font-semibold rounded-[7px] border-none cursor-pointer"
          >
            Sell Material
          </Link>
        </div>
      </div>
      
    </div>
  );
}

export default Bsm;
