"use client"
import OtherNav from "@/componuntes/OtherNav";
import { useState, useEffect,  } from "react";
import { CiLocationOn } from "react-icons/ci";
import { GiWeight } from "react-icons/gi";
import { useSession } from "next-auth/react";

function Profile() {
  const { data: session, status } = useSession();
  const [postes, setPostes] = useState([]);
  const [userdetail, setUserdetail] = useState({
    // "mobialNum":987213471,
    // "name":"Arul",
    // "email":"Admin@gmail.com"
  });

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  

    const fetchPosts = async () => {
      try {
        const poste = await fetch("/api/userpost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: session.user.email,
          }),
        });
        const jsonpost = await poste.json();
        if (jsonpost) {
          setPostes(jsonpost.dbrespinse);
          
          
        }
      } catch (error) {
        console.log("Error fetching posts:", error);
      }
    };

    const fetchUserDetails = async () => {
      try {
        const poste = await fetch("/api/userdetails",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: session.user.email,
            }),
          }
        );
        const jsonpost = await poste.json();
        if (jsonpost) {
      
          setUserdetail(jsonpost.dbrespinse[0])
        
          
        }
      } catch (error) {
        console.log("Error fetching user details:", error);
      }
    };


useEffect(()=>{
if(session){
 fetchUserDetails()
 fetchPosts()
 };

},[])
const handelDeletPost =async(id)=>{
  const dbres = await fetch("/api/posts",{
  method: 'DELETE', 
            headers: { 
                'Content-type': 'application/json'
            } ,
            body:JSON.stringify(id)
  });
  const jres = await dbres.json();
  if(jres){
  // alert("post deleted")
  console.log(jres.sts);
  
  }

}
  return (
    <>

      <OtherNav />


      <div className="flex w-4/5 mx-auto border border-black rounded-lg mt-10 h-auto p-4">
        <div className="w-1/2 flex justify-center items-center">
          <img
            src="/profile.png"
            alt="profile img"
            className="w-72 h-72 rounded-full border-4 border-gray-300"
          />
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold mb-4">PROFILE</h2>
          <p className="text-lg">{userdetail.name}</p>
          <p className="text-lg">{userdetail.email}</p>
          <p className="text-lg">{userdetail.mobialNum}</p>
        </div>
      </div>

      <hr className="w-11/12 mx-auto my-10 border-t-2 border-black" />

      <div className="w-4/5 mx-auto">
        <h1 className="text-center text-2xl font-semibold mb-6">PRODUCTS</h1>
        {!postes ? (
           <p>No posts available</p>
        ) : postes.length === 0 ? (
        
           <p>Loading...</p>
        ) : (
          postes.map((val) => (
            <div
              className="flex w-full max-w-4xl mx-auto border border-gray-300 rounded-lg mb-8 shadow-md"
              key={val._id}
            >
              <div className="w-1/3">
                <img
                  src={val.imageUrl}
                  alt="productimg"
                  className="w-full h-full object-cover rounded-l-lg"
                />
              </div>
              <div className="w-2/3 p-4 flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-2">{val.type}</h3>
                <p className="text-sm mb-2">{val.description}</p>
                <p className="text-sm mb-2 flex items-center">
                  <GiWeight className="mr-2" />
                  {val.quantity}
                </p>
                <p className="text-sm mb-4 flex items-center">
                  <CiLocationOn className="mr-2" />
                  {val.location}
                </p>
                <button
                onClick={()=> handelDeletPost(val._id)}
                className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold">
             DELETE
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Profile;
