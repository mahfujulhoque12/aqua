import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '/public/logo/logo.png';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaInstagramSquare } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import { BsMailboxFlag } from "react-icons/bs";
import { AiOutlinePrinter } from "react-icons/ai";
import footerImg from '/public/footer/footer.png';

import { FaPhoneVolume } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="  text-white bg-gradient-to-r from-[#20B038] to-[#3dee4b]">
      <div className="py-16">
        <MaxWidthWrapper>
        <div className="flex flex-wrap ">
    <div className="basis-full md:basis-1/3 p-2">
        <Link href="/" className="flex items-start gap-2">
            <Image src={logo} alt="" width={45} height={45} />
            <p className="text-[20px] font-medium text-white">
                Aqua Consultant & Associates limited
            </p>
        </Link>
        <p className="text-white font-normal text-base mt-2">
            AQUA Consultant & Associates Limited was established in Oct., 1983 as an independent consulting engineering organisation with the determination of providing quality consultancy services.
        </p>
        <p className="text-white font-normal text-base mt-8">
            Follow us:
        </p>
        <div className="flex gap-2 mt-2"> 
       
      
        <Link href="#">
        <FaSquareFacebook size={25} className="text-blue-400"/>
         </Link>
            <Link href="#"> 
            <FaLinkedin size={25} className="text-blue-500"/>
            </Link>
            <Link href="#"> 
              <FcGoogle size={25}/>
            </Link>
            <Link href="#"> 
        <FaInstagramSquare size={25} className="text-pink-600"/>

            </Link>



        </div>
    </div>
    <div className="basis-full md:basis-1/6 p-2">
    <p className="text-base font-semibold text-white">Our Company</p>

   <div className="flex flex-col mt-5 md:mt-10">
   <Link href="#" className="font-normal text-sm text-white">About Us</Link>
    <Link href="#" className="font-normal text-sm text-white mt-2">Services</Link>
    <Link href="#" className="font-normal text-sm text-white mt-2">Careers</Link>
    <Link href="#" className="font-normal text-sm text-white mt-2">Sectors</Link>
    <Link href="#" className="font-normal text-sm text-white mt-2">Contact Us</Link>
    <Link href="#" className="font-normal text-sm text-white mt-2">Project</Link>
    <Link href="#" className="font-normal text-sm text-white mt-2">Notice Board</Link>
   </div>

    </div>
    <div className="basis-full md:basis-1/6  p-2">
    <p className="text-base font-semibold text-white">Our Links</p>

    <div className="flex flex-col mt-5 md:mt-10">
   <Link href="#" className="font-normal text-sm text-white">View Account</Link>
    <Link href="#" className="font-normal text-sm text-white mt-2">History</Link>
    <Link href="#" className="font-normal text-sm text-white mt-2">Company Facts</Link>
    <Link href="#" className="font-normal text-sm text-white mt-2">Organization</Link>
    <Link href="#" className="font-normal text-sm text-white mt-2">Vision-mission-values</Link>
   </div>
    </div>
    <div className="basis-full md:basis-1/6 p-2">
    <p className="text-base font-semibold text-white">Sectors</p>

    <div className="flex flex-col mt-5 md:mt-10">
    <Link href="#" className="font-normal text-sm text-white">Water Supply</Link>
    <Link href="#" className="font-normal text-sm text-white mt-2">Sewerage</Link>
    <Link href="#" className="font-normal text-sm text-white mt-2">Storm Water</Link>
    <Link href="#" className="font-normal text-sm text-white mt-2">Solid Waste</Link>
    <Link href="#" className="font-normal text-sm text-white mt-2">NRW and Leak Detection</Link>
    <Link href="#" className="font-normal text-sm text-white mt-2">Roads and Bridges</Link>
    <Link href="#" className="font-normal text-sm text-white mt-2">Tourism Infrastructure</Link>
    <Link href="#" className="font-normal text-sm text-white mt-2">Architecture</Link>

    </div>
    </div>
    <div className="basis-full md:basis-1/6  p-2">
    <p className="text-base font-semibold text-white">Contact Info</p>
    <div className="flex items-start gap-2 mt-10">
        <p> <AiOutlineHome size={25} className="text-white"/></p>
   
        <p className="font-normal text-sm text-white">43 Mohakhali C/A (14th Level), 
        Dhaka-1212, Bangladesh.</p>
    </div>
    <div className="flex items-center gap-2 mt-3">
        <p> <FaPhoneVolume  size={20} className="text-white"/></p>
   
        <p className="font-normal text-sm text-white">222286411, 222261990</p>
    </div>
    <div className="flex items-center gap-2 mt-3">
        <p> <BsMailboxFlag   size={25} className="text-white"/></p>
   
        <p className="font-normal text-sm text-white">info@aquacon.com.bd</p>
    </div>
    <div className="flex items-center gap-2 mt-3">
        <p> <AiOutlinePrinter   size={25} className="text-white"/></p>
   
        <p className="font-normal text-sm text-white"> 880-2-222295029</p>
    </div>
    </div>
</div>


        </MaxWidthWrapper>
      </div>
      <div className="  pb-5">
        <MaxWidthWrapper>
          <div className="flex border-t  flex-col gap-3 md:flex-row justify-between">
            <div className="mt-2">
            <p className="mb-0">
              &copy; {new Date().getFullYear()}  All Rights Reserved
            </p>

            </div>
            <div  className="mt-2">
             <Image src={footerImg} alt="img" width={400} height={100}/>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </footer>
  );
};

export default Footer;
