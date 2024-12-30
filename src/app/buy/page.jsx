"use client";
import Footer from "@/componuntes/Fotter";
import OtherNav from "@/componuntes/OtherNav";
import React, { useContext, useEffect, useRef, useState } from "react";

import { CiLocationOn } from "react-icons/ci";
import { GiWeight } from "react-icons/gi";
import { useSession } from "next-auth/react";
import Cookies from "js-cookie";
import Loader from "@/componuntes/Svg";

function Buy() {
  const [items, setItems] = useState([]);
  const { data: session, status } = useSession();
  const [search,setSearch]=useState()
  const [searchitems,setSearchitems]=useState([])
  const dialogRef = useRef(null)
  const openDialog = () => {
    dialogRef.current.showModal(); // Opens the dialog as a modal
  };

  const closeDialog = () => {
    dialogRef.current.close(); // Closes the dialog
  };
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await fetch("/api/posts");
        const jsonpost = await posts.json();
        if (jsonpost) {
          setItems(jsonpost.dbresponse);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
   
  }, []);
  const hangelorder = async(type,sellerEmail)=>{
    openDialog();
      if(session){

        const fdata = await fetch('/api/sendmail',{
          method:"POST",
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
            email: Cookies.get("email"),
            type:type,
            clientemail:sellerEmail
          })
        })
        const jres = await fdata.json()
        if(jres.resstates){
          closeDialog();
          alert("order query send sucessfully seller will contact you")
        }else{
          alert("something went worng try again later")
        }
      }else{
       alert("log in to submit your queary")
      }
  }

  //  const newaee = search && items.filter((item) => item.type.toLowerCase().includes(search.toLowerCase()))
    
   
  return (
    <div className="buy-home">
    <OtherNav />
    <div className="buy-main mt-10 w-11/12 mx-auto">
      {/* <input
        type="text"
        placeholder="Search..."
        onChange={(e)=>setSearch(e.target.value)}
        value={search}
        className="w-full max-w-[600px] border-[1px] border-black mx-auto text-lg py-3 px-6 rounded-full mt-8"
      /> */}
    </div>
    <div className="buy-cards flex flex-wrap justify-between mt-8">
     
      { items && items.length === 0 ? (
        <p className="w-full h-[40vh] text-center text-lg font-medium">Loading...</p>
      ) : items.length > 0 ? (
        items.map((val) => (
          <div className="card w-full  sm:w-1/2 lg:w-1/3 p-4" key={val._id}>
            <div className="card-inner bg-white border rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="one p-4">
                <img
                  src={val.imageUrl}
                  alt="productimg"
                  className="w-3/4 h-[200px] mx-auto my-4 rounded-lg"
                />
              </div>
              <div className="two p-4">
                <h3 className="text-2xl font-semibold mb-3">{val.type}</h3>
                <p className="card-p text-sm text-gray-600 mb-3">
                  {val.description}
                </p>
                <p className="flex items-center space-x-2 mb-3">
                  <GiWeight className="text-xl" />
                  <span>{val.quantity}</span>
                </p>
                <p className="flex items-center space-x-2 mb-3">
                  <CiLocationOn className="text-xl" />
                  <span>{val.location}</span>
                </p>
                <button
                  className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-400 transition w-full mt-4"
                  onClick={()=>{hangelorder(val.type,val.userID)}}
                 
                >
                  BUY
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="w-full text-center text-lg font-medium">
          No posts available
        </p>
      )}
    </div>
    <Footer />
    <dialog ref={dialogRef} className="bg-transparent border-none">
      <Loader />
      <p className="text-center">loading.....</p>
    </dialog>
  </div>
  );
}

export default Buy;
