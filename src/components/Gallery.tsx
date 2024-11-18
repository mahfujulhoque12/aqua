import React from 'react'
import MaxWidthWrapper from './layout/MaxWidthWrapper'
import { FaTelegramPlane } from "react-icons/fa";
import slider1 from '/public/slider/slider1.png';
import slider2 from '/public/slider/slider2.png';
import slider3 from '/public/slider/slider3.png';
import slider4 from '/public/slider/slider4.png';
import slider5 from '/public/slider/slider5.png';
import slider6 from '/public/slider/slider6.png';
import slider7 from '/public/slider/slider7.png';
import slider8 from '/public/slider/slider8.png';
import slider9 from '/public/slider/slider9.png';
import slider10 from '/public/slider/slider10.png';


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';



const Gallery:React.FC = () => {
  return (
    <section className='py-5 md:py-10'>
        <MaxWidthWrapper>
        <div>
        <h4 className="text-sm justify-center text-black flex mt-8 items-center font-semibold font-roboto uppercase gap-2">
              Gallery <FaTelegramPlane className="text-[#20B038]" />
            </h4>
            <h2 className="mt-4 text-xl w-full md:w-[60%] mx-auto text-center font-semibold md:text-[50px] text-black font-roboto leading-tight">
            Explore our legacy through standout projects and impactful designs.
            </h2>

            <Carousel className='mt-5'>
  <CarouselContent>
    <CarouselItem>
      <div className='flex flex-col md:flex-row gap-2'>
        {/* frist div */}
        <div className='mt-5'>
          <Image src={slider1} alt='slider' width={300} height={300} className='w-[250px] h-[170px] mt-10'/>
        </div>

         {/* sec div */}
         <div className='mt-8'>
          <Image src={slider2} alt='slider' width={300} height={300} className='h-[250px]'/>
        </div>

         {/* 3rd div */}
         <div className='mt-3'>
          <Image src={slider3} alt='slider' width={300} height={300}/>
          <Image src={slider4} alt='slider' width={300} height={300} className='mt-2'/>

        </div>

         {/* 4th div */}
         <div>
          <Image src={slider5} alt='slider' width={300} height={300}/>
          <Image src={slider6} alt='slider' width={300} height={300} className='mt-2'/>

        </div>
         {/* 5th div */}
         <div className='mt-3'>
          <Image src={slider7} alt='slider' width={300} height={300}/>
          <Image src={slider8} alt='slider' width={300} height={300} className='mt-2'/>

        </div>

         {/* 6th div */}
         <div className='mt-8'>
          <Image src={slider9} alt='slider' width={300} height={300}/>
        </div>
         {/* 7th div */}
         <div className='mt-16'>
          <Image src={slider10} alt='slider' width={300} height={300}/>
        </div>
      </div>
    </CarouselItem>
    <CarouselItem>
    <div className='flex flex-col md:flex-row gap-2'>
        {/* frist div */}
        <div className='mt-5'>
          <Image src={slider1} alt='slider' width={800} height={300} className=' w-full md:w-[250px] h-[170px] mt-10 object-cover'/>
        </div>

         {/* sec div */}
         <div className='mt-8'>
          <Image src={slider2} alt='slider' width={800} height={300} className='w-full md:w-[280px] object-cover h-[250px]'/>
        </div>

         {/* 3rd div */}
         <div className='mt-3'>
          <Image src={slider3} alt='slider' width={300} height={300}/>
          <Image src={slider4} alt='slider' width={300} height={300} className='mt-2'/>

        </div>

         {/* 4th div */}
         <div>
          <Image src={slider5} alt='slider' width={300} height={300}/>
          <Image src={slider6} alt='slider' width={300} height={300} className='mt-2'/>

        </div>
         {/* 5th div */}
         <div className='mt-3'>
          <Image src={slider7} alt='slider' width={300} height={300}/>
          <Image src={slider8} alt='slider' width={300} height={300} className='mt-2'/>

        </div>

         {/* 6th div */}
         <div className='mt-8'>
          <Image src={slider9} alt='slider' width={300} height={300}/>
        </div>
         {/* 7th div */}
         <div className='mt-16'>
          <Image src={slider10} alt='slider' width={300} height={300}/>
        </div>
      </div>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>


        </div>

        </MaxWidthWrapper>
    </section>
  )
}

export default Gallery