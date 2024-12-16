'use client';
import Footer from "@/componuntes/Fotter";
import OtherNav from "@/componuntes/OtherNav";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import  {useForm }  from "react-hook-form"
import { CgProfile } from "react-icons/cg";
import { storage } from "@/lib/firebase";
import { useSession } from "next-auth/react";

const Sell = () => {  
  const { data: session, status } = useSession();
  const userID = "session id"
  const [downloadURL, setDownloadURL] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // if (session) {
  //   console.log(session.user.email);
  //   }
  const onSubmit = async (data) => {
    const file = data.file[0];
    if (file) {
      const storageRef = ref(storage, `files/${file.name}`);
      try {
        const snapshot = await uploadBytes(storageRef, file);

        const url = await getDownloadURL(snapshot.ref);
        setDownloadURL(url);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      alert("Please choose a file first.");
    }

    if (downloadURL) {
      try {
        const dbres = await fetch("/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: data.type,
            description: data.description,
            location: data.location,
            quantity: data.quantity,
            imageUrl: downloadURL,
            userID: session.user.email,
          }),
        });
        if (dbres) {
          const dbjson = await dbres.json();
          if (dbjson.messege === "added") {
            alert("Product Added");
          } else {
            alert("something went wrong");
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

return (
    <>
<OtherNav />
      <div className="sell-feild  flex justify-around h-[100vh] mt-[60px]">
        <div className="sell-text text-green-600 w-[50%] mt-[80px]">
          <div className="main-text-sce text-center">
            <h3 className="uppercase text-xl font-semibold mb-4">Get the best price for your bulk plastic</h3>
            <h1 className="text-4xl font-bold mb-4">Sell Your Plastic Material</h1>
            <p className="text-lg text-justify mb-4">
              WasteTrade makes it easier than ever to sell waste commodities for the best prices to the most sustainable reprocessors.
            </p>
            <img src="/pixelcut-export.jpeg" alt="logo" className="mx-auto mb-4 w-[300px] h-[200px]" />
          </div>
        </div>
<div>


        <form  className="w-96 bg-green-600 text-white p-6 rounded-xl" onSubmit={handleSubmit(onSubmit)}>
          <p className="text-center text-xl mb-4">Fill the details</p>
          <input
            type="text"
            name="type"
            placeholder="Material Type"
            className="w-4/5 mx-auto block p-2 mb-4 text-sm text-black rounded-md"
            {...register("type", {
              required: {
                value: true,
                message: "fill all the fields",
              },
            })}
          />
            {errors.quantity && (
            <p className="text-red-500 text-sm p-0"> {errors.location.message}</p>
          )}
          <input
            type="text"
            name="quantity"
            placeholder="Quantity (kg)"
            className="w-4/5 mx-auto p-2 block mb-4 text-sm text-black rounded-md"
            {...register("quantity", {
              required: {
                value: true,
                message: "fill all the fields",
              },
            })}
           
          />
            {errors.quantity && (
            <p className="text-red-500 text-sm p-0"> {errors.location.message}</p>
          )}
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="w-4/5 mx-auto block text-black p-2 mb-4 text-sm rounded-md"
            {...register("location", {
              required: {
                value: true,
                message: "fill all the fields",
              },
            })}
          />
            {errors.quantity && (
            <p className="text-red-500 text-sm p-0"> {errors.location.message}</p>
          )}
          <input
            type="file"
            accept="image/*"
            name="file"
             className="w-4/5 mx-auto block text-black p-2 mb-4 bg-[#fff] placeholder:text-gray-400 text-sm rounded-md"
            {...register("file", {
              required: {
                value: true,
                message: "fill all the fields",
              },
            })}
          />
            {errors.quantity && (
            <p className="text-red-500 text-sm p-0"> {errors.location.message}</p>
          )}
          <textarea
            name="description"
            placeholder="Description"
            className="w-4/5 mx-auto block p-2 mb-4 text-black text-sm rounded-md"
            {...register("description", {
              required: {
                value: true,
                message: "fill all the fields",
              },
            })}
          ></textarea>
          {errors.quantity && (
            <p className="text-red-500 text-sm p-0"> {errors.location.message}</p>
          )}
          <button
               disabled={isSubmitting}
            type="submit"
            className="w-1/2 mx-auto bg-white block  text-green-600 py-2 rounded-full font-semibold text-lg hover:bg-green-600 hover:text-[#fff] border-[2px] border-[#fff] transition-all duration-300 ease-in-out" 
          >
        {isSubmitting ? "Loading.." : "Sign Up"}
          </button>
          {errors.root && <p className="text-red-500 text-sm p-0"> {errors.root.message}</p>}
        </form>
        </div>
      </div>
    <Footer />
    </>
  );
};

export default Sell;
