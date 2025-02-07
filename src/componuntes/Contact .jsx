"use client"
import React from "react";
import  {useForm }  from "react-hook-form"

function Contact() {
  

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    alert("our team will reach you");
    reset();
    
  }
  return (
    <div className="w-full flex justify-center py-[50px]"  id="contact">
      <form className="w-[800px]"  onSubmit={handleSubmit(onSubmit)} >
        <div className="flex mb-[20px]">
          <input
            type="text"
            placeholder="Firstname"
            {...register("fname",{
              required:{
                value:true,
                message: "required"
              }
            })}
            className="w-[50%] h-[40px] p-[10px] text-base   border-[1px] border-green-600 rounded-[6px] mr-[10px]"
          />
          <input
            type="text"
            placeholder="Lastname"
             {...register("lname",{
              required:{
                value:true,
                message: "required"
              }
            })
          }
            className="w-[50%] h-[40px] p-[10px] text-base  border-[1px] border-green-600 rounded-[6px]"
          />
        </div>
        <div className="flex mb-[20px]">
          <input
            type="text"
            placeholder="Mobile"
            {...register("number",{
              required:{
                value:true,
                message: "required"
              }
            })
          }
            className="w-[50%] h-[40px] p-[10px] text-base border  border-[1px]] border-green-600 rounded-[6px] mr-[10px]"
          />
          <input
            type="email"
            placeholder="Email"
            {...register("email",{
              required:{
                value:true,
                message: "required"
              }
            })
          }
            className="w-[50%] h-[40px] p-[10px] text-base  border-[1px] border-green-600 rounded-[6px]"
          />
        </div>
        <textarea
          placeholder="Message"
          {...register("text",{
              required:{
                value:true,
                message: "required"
              }
            })
          }
          className="w-[95%] h-[80px] p-[10px] text-base  border-[1px] block mx-auto border-green-600 rounded-[6px] mb-[20px]"
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
