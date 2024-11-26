import AboutUs from "@/components/AboutUs";
import Chat from "@/components/Chat";
import Counter from "@/components/Counter";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";
import Videos from "@/components/Videos";
import WhyChoseUs from "@/components/WhyChoseUs";




export default function Home() {
  return (
   <div>
    <Hero/>
    <AboutUs/>
    <Videos/>
    <Services/>
    <Gallery/>
    <Counter/>
    <Chat/>
    <WhyChoseUs/>
    <Subscribe/>
   </div>
     
  );
}
