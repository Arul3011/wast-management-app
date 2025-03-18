"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation'
 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router= useRouter();
  const [loading,setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(!loading);
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, 
    });

    if (result.error) {
      setError("Invalid email or password");
    } else {
      toast.success('Login scucessfull');
      // alert("Success");
      setLoading(!loading);
      router.push('/')
      document.cookie = `email=${email}; expires=fri, path=/`;
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat backdrop-blur-[100px]"
    style={{
      backgroundImage: "url('/SAVE_20240917_130447.jpg')",
      backdropFilter: "blur(10px)",
    }}
        >
      <form onSubmit={handleSubmit} className="w-[400px] p-5 flex flex-col bg-white shadow-md rounded-lg">
        <img src="/pixelcut-export.jpeg" alt="logo" className="mx-auto w-[180px] h-[140px]" />
        <p className="text-center text-xl font-semibold mt-2">LOGIN</p>
        
        {/* Email input */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[80%] mx-auto h-8 mt-3 mb-3 px-3 rounded-lg border border-gray-300"
        />
        
      
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-[80%] mx-auto h-8 mb-3 px-3 rounded-lg border border-gray-300"
        />
        
      
        <div className="flex justify-center text-sm text-blue-600 mt-2 w-[100%]">
          <Link href="/register" className="hover:underline">Create account</Link>
         
        </div>
        
   
        <input
          type="submit"
          // value="Login"
          className="w-36 mx-auto mt-4 py-2 text-white bg-green-600 border-0 rounded-lg cursor-pointer hover:bg-green-700"
          value = {loading ? "Loading..." : "Submit"}
        />
      </form>
    </div>
  );
}

export default Login;
