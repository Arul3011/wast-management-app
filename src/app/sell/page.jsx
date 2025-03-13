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
  const [btnval , setBtnval] = useState("Uplode image");
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isSubmitting },
  } = useForm();
// const handelimgfile = (e) =>{
// // e.preventDefault();
// alert("img");
// const file = e.target.files[0];
//     if (file) {
//       // console.log(file);
      
//       setImgfile(file); // Store the selected image file in state
//       // console.log(URL.createObjectURL(file));
      
//       // setImageUrl(URL.createObjectURL(file)); // Optional: Display a preview
//     }
// }


  const onSubmit = async (data) => {
    const file = data.file[0];
    if (file) {
      const storageRef = ref(storage, `files/${file.name}`);
      try {
        const snapshot = await uploadBytes(storageRef, file);

        const url = await getDownloadURL(snapshot.ref);
        setDownloadURL(url);
        setBtnval("uplode")
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      alert("Please choose a file first.");
    }

    if (downloadURL && session) {
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
            resetField("location");
            resetField("type");
            resetField("description");
            resetField("quantity");
            resetField("file");
            setBtnval("uplode Image")
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
      <div className="sell-feild w-[100%]  flex items-center justify-around h-[auto] mt-[60px] flex-wrap md:flex-row  flex-col-reverse  ">
        <div className="sell-text text-green-600 w-[40%] mt-[80px]">
          <div className="main-text-sce text-center">
            <img src="/pixelcut-export.jpeg" alt="logo" className="mx-auto mb-4 w-[300px] h-[200px]" />
            <h3 className="uppercase text-xl font-semibold mb-4">Get the best price for your bulk plastic</h3>
            <h1 className="text-4xl font-bold mb-4">Sell Your Plastic Material</h1>
            <p className="text-lg text-justify mb-4">
              WasteTrade makes it easier than ever to sell waste commodities for the best prices to the most sustainable reprocessors.
            </p>
          </div>
        </div>
<div className="flex justify-center w-[100%] md:w-[40%]">


        <form  className="w-[80%] md:w-[100%] bg-green-600 text-white p-6 rounded-xl " onSubmit={handleSubmit(onSubmit)}>
          <p className="text-center text-xl mb-4">Fill the details</p>
          <input
            type="text"
            name="type"
            placeholder="Material Type"
            className="w-[90%] mx-auto block p-2 mb-4 text-sm text-black rounded-md"
            {...register("type", {
              required: {
                value: true,
                message: "fill all the fields",
              },
            })}
          />
            {errors.type && (
            <p className="text-red-500 text-sm p-0"> {errors.type.message}</p>
          )}
          <input
            type="text"
            name="quantity"
            placeholder="Quantity (kg)"
            className="w-[90%] mx-auto p-2 block mb-4 text-sm text-black rounded-md"
            {...register("quantity", {
              required: {
                value: true,
                message: "fill all the fields",
              },
            })}
           
          />
            {errors.quantity && (
            <p className="text-red-500 text-sm p-0"> {errors.quantity.message}</p>
          )}
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="w-[90%] mx-auto block text-black p-2 mb-4 text-sm rounded-md"
            {...register("location", {
              required: {
                value: true,
                message: "fill all the fields",
              },
            })}
          />
            {errors.location && (
            <p className="text-red-500 text-sm p-0"> {errors.location.message}</p>
          )}
          <input
            type="file"
            accept="image/*"
            name="file"
             className="w-[90%] mx-auto block text-black p-2 mb-4 bg-[#fff] placeholder:text-gray-400 text-sm rounded-md"
            {...register("file", {
              required: {
                value: true,
                message: "fill all the fields",
              },
            })}
            // onChange={handelimgfile}
          />
            {errors.file && (
            <p className="text-red-500 text-sm p-0"> {errors.file.message}</p>
          )}
          <textarea
            name="description"
            placeholder="Description"
            className="w-[90%] mx-auto block p-2 mb-4 text-black text-sm rounded-md"
            {...register("description", {
              required: {
                value: true,
                message: "fill all the fields",
              },
            })}
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm p-0"> {errors.description.message}</p>
          )}
         
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-1/2 line-clamp-2 mx-auto bg-white block  text-green-600 py-1 rounded-full font-semibold text-lg hover:bg-green-600 hover:text-[#fff] border-[2px] border-[#fff] transition-all duration-300 ease-in-out" 
          >   
        {isSubmitting ? "Loading.." : btnval}
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
