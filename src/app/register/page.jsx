'use client';
import { useForm } from "react-hook-form";
import Link from "next/link";
import { redirect } from "next/navigation";

function Signup() {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.conpassword) {
      setError("root", { type: "manual", message: "Passwords do not match" });
      return;
    } else {
      clearErrors("root");
    }

    try {
      const dbres = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          name: data.name,
          mobialNum: data.mobial,
        }),
      });

      const jres = await dbres.json();
      if (jres.message === "addedd") {
        redirect("/api/auth/signin");
      } else {
        setError("root", { type: "manual", message: jres.error || "Sign up failed" });
      }
    } catch (error) {
      setError("root", { type: "manual", message: "An error occurred. Please try again later." });
    }
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/SAVE_20240917_130447.jpg')",
        backdropFilter: "blur(10px)",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-96 flex flex-col p-6 shadow-lg rounded-lg bg-white"
      >
        <img src="/pixelcut-export.jpeg" alt="logo" className="mb-4 h-[150px] w-[190px] m-[auto]" />
        <p className="text-xl font-bold text-center mb-4">SIGN UP</p>

        {errors.root && (
          <p className="text-red-500 text-center mb-4">{errors.root.message}</p>
        )}

        <input
          type="text"
          {...register("name", {
            required: {
              value: true,
              message: "Enter your name",
            },
          })}
          placeholder="Name"
          className="w-11/12 mx-auto h-10 my-2 rounded px-2 border"
        />
        {errors.name && <p className="text-red-500 ml-[10px]  text-[10px]">{errors.name.message}</p>}

        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Enter your email",
            },
          })}
          placeholder="Email"
          className="w-11/12 mx-auto h-10 my-2 rounded px-2 border"
        />
        {errors.email && <p className="text-red-500 ml-[10px]   text-[10px]">{errors.email.message}</p>}

        <input
          type="tel"
          {...register("mobial", {
            required: {
              value: true,
              message: "Enter your mobile number",
            },
          })}
          placeholder="Mobile Number"
          className="w-11/12 mx-auto h-10 my-2 rounded px-2 border"
        />
        {errors.mobial && <p className="text-red-500 ml-[10px]   text-[10px]">{errors.mobial.message}</p>}

        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Enter your password",
            },
          })}
          placeholder="Password"
          className="w-11/12 mx-auto h-10 my-2 rounded px-2 border"
        />
        {errors.password && <p className="text-red-500 ml-[10px]  text-[10px]">{errors.password.message}</p>}

        <input
          type="password"
          {...register("conpassword", {
            required: {
              value: true,
              message: "Confirm your password",
            },
          })}
          placeholder="Confirm Password"
          className="w-11/12 mx-auto h-10 my-2 rounded px-2 border"
        />
        {errors.conpassword && <p className="text-red-500 ml-[10px]  text-[10px]">{errors.conpassword.message}</p>}

        <Link href="/api/auth/signin" className="text-blue-500 text-sm text-center mt-2">
          Already have an account?
        </Link>

        <input
          disabled={isSubmitting}
          type="submit"
          value={isSubmitting ? "Loading.." : "Sign Up"}
          className="w-40 mx-auto mt-4 bg-green-500 text-white rounded h-10 font-semibold cursor-pointer disabled:opacity-50"
        />
      </form>
    </div>
  );
}

export default Signup;
