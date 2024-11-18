"use client"
import React, { useState } from 'react';
import MaxWidthWrapper from './layout/MaxWidthWrapper'
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import chose1 from '/public/chose/chose1.png';
import chose2 from '/public/chose/chose2.png';
import Image from 'next/image';



const WhyChoseUs = () => {
    const [showAll, setShowAll] = useState<boolean>(false);

    const newsItems: string[] = [
        "TPIA for Multi Village Drinking Water Schemes unde",
        "PMC for Phase - II Water Supply Project of Bangalo",
        "TPIA for Multi Village Drinking Water Schemes unde",
        "TPIA for Multi Village Drinking Water Schemes unde",
        "TPIA for Multi Village Drinking Water Schemes unde",
        "TPIA for Multi Village Drinking Water Schemes unde",
        "TPIA for Multi Village Drinking Water Schemes unde",
        "TPIA for Multi Village Drinking Water Schemes unde",
        "TPIA for Multi Village Drinking Water Schemes unde",
        "TPIA for Multi Village Drinking Water Schemes unde",
        "TPIA for Multi Village Drinking Water Schemes unde",
        "TPIA for Multi Village Drinking Water Schemes unde"
    ];

   
  return (
    <section className='pb-10'> 
        <MaxWidthWrapper>
        <div>
        <h4 className="text-sm justify-center  flex items-center font-semibold font-roboto text-balck uppercase mt-10 gap-2">
        Why Choose Us <FaTelegramPlane className="text-[#20B038]" />
          </h4>
          <h2 className="w-full text-black text-center md:w-[45%] mx-auto mt-4 font-semibold text-xl sm:text-[50px]  font-roboto leading-tight">
          Delivering the best for last 41 years
          </h2>
          <p className="font-normal w-full lg:w-[70%] mx-auto text-sm sm:text-base font-roboto text-black text-cemter mt-5">
          The directors and key technical  personnel of the firm are rendering consultancy services  in the field of civil engineering, water supply, water  resources, ground water exploration, water treatment,  irrigation, drainage, sewerage, low cost sanitation, solid  waste management, community development, financial  management and training.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8'>
  {/* First card */}
  <div className="flex flex-col h-full">
    <Image src={chose2} alt='img' width={400} height={400} className='w-full'/>
    <div className='flex flex-col flex-grow p-4 rounded-b-md bg-gradient-to-t from-[#3528C5] to-[#3120DCCC]'> 
      <h4 className='text-center text-sm text-white font-normal '>Company Profile</h4>
      <p className='text-[10px] font-normal px-10 text-center mt-2 text-white'>
        AQUA offers a wide range of skills and services for collaborative projects in environmental information management.
      </p>
      <div className='w-[100%] md:w-[70%] mx-auto flex mt-5 py-2 rounded-md justify-center items-center bg-[rgba(255,255,255,0.1)]'>
        <button className='text-sm font-medium flex justify-center items-center gap-2 text-white'>
          Download Company Profile
          <MdOutlineFileDownload size={20} />
        </button>
      </div>
    </div>
  </div>

  {/* Second card */}
  <div className="flex flex-col h-full">
    <Image src={chose1} alt='img' width={400} height={400} className='w-full'/>
    <div className='flex flex-col flex-grow p-4 rounded-b-md bg-gradient-to-t from-[#D72126] to-[#E71319CC]'> 
      <h4 className='text-center text-sm text-white font-normal '>Join AQUA</h4>
      <p className='text-[10px] font-normal text-center mt-2 text-white'>
        Explore career opportunities at AQUA Consultant & Associates Limited. Join a dynamic team of experts committed to innovation, quality, and professional growth. Build your future with us through a streamlined recruitment process focused on finding the best talent to drive success.
      </p>
      <div className='w-[100%] md:w-[70%] mx-auto flex mt-5 py-2 rounded-md justify-center items-center bg-[rgba(255,255,255,0.1)]'>
        <button className='text-sm font-medium flex justify-center items-center gap-2 text-white'>
          Click Here to Post Your Resume
          <MdOutlineFileDownload size={20} />
        </button>
      </div>
    </div>
  </div>

  {/* Third card */}
  <div className="flex flex-col h-full">
     <div className="flex-grow bg-gray-300 rounded-md p-4 bg-gradient-to-t from-[#20B038] to-[#60D66A]">
            <h5 className="text-base font-normal text-white">News Today</h5>

            {newsItems.slice(0, 8).map((item, index) => (
                <p key={index} className="text-white flex gap-2 text-sm font-normal mt-5">
                    {index + 1} <span className="underline capitalize">{item}</span>
                </p>
            ))}

            {showAll &&
                newsItems.slice(8).map((item, index) => (
                    <p key={index + 8} className="text-white flex gap-2 text-sm font-normal mt-3">
                        {index + 9} <span className="underline capitalize">{item}</span>
                    </p>
                ))}

            <button
                className="text-white text-sm font-medium mt-3"
                onClick={() => setShowAll(!showAll)}
            >
                {showAll ? "Show Less" : "Show More"}
            </button>
        </div>
  </div>
</div>

        </MaxWidthWrapper>
    </section>
  )
}

export default WhyChoseUs