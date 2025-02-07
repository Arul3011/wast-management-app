import Nav from "@/componuntes/Nav";
import Image from "next/image";
import Bsm from "@/componuntes/CardNav";
import About from "@/componuntes/About";
import Contact from "@/componuntes/Contact ";
import Footer from "@/componuntes/Fotter";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";

export default async function Home() {
 const session = await getServerSession(options);
  return (
 <div style={{"scrollBehavior": "smooth"}}>
  <Nav />
  <Bsm  />
  <About  id="about"/>
  <h1 className="text-center text-green-600 text-[2em] mt-[30px]">Contact us</h1>
  <Contact />
    <Footer />
 </div>
  );
}
