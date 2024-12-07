import Nav from "@/componuntes/Nav";
import Image from "next/image";
import Bsm from "@/componuntes/CardNav";
import About from "@/componuntes/About";
import Contact from "@/componuntes/Contact ";
import Footer from "@/componuntes/Fotter";

export default function Home() {
  return (
 <div>
  <Nav />
  <Bsm />
  <About />
  <h1 className="text-center text-green-600 text-[2em] mt-[30px]">Contact us</h1>
  <Contact />
    <Footer />
 </div>
  );
}
