import AboutUs from "@/components/AboutUs";
import Chat from "@/components/Chat";
import Counter from "@/components/Counter";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar/Navbar";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";
import Videos from "@/components/Videos";
import WhyChoseUs from "@/components/WhyChoseUs";
import Footer from "@/components/Footer";



export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <AboutUs/>
    <Videos/>
    <Services/>
    <Gallery/>
    <Counter/>
    <Chat/>
    <WhyChoseUs/>
    <Subscribe/>
    <Footer/>
   </div>
     
  );
}
