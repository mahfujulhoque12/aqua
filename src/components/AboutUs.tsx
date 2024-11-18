import React from "react";
import about1 from "/public/aboutus/about1.png";
import about2 from "/public/aboutus/about2.png";
import about3 from "/public/aboutus/about3.png";
import about4 from "/public/aboutus/about4.png";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";

const AboutUs = () => {
  return (
    <section className="py-5 md:py-10 ">
        <MaxWidthWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          {/* First image row */}
          <div className="flex flex-col md:flex-row gap-4">
            <Image
              src={about1}
              alt="about1"
              width={500}
              height={500}
              className="w-full lg:w-[250px] lg:h-[260px] xl:w-[303px] h-[200px] xl:h-[325px] object-cover"
            />
            <Image
              src={about2}
              alt="about2"
              width={500}
              height={500}
              className="w-full object-contain  lg:w-[250px] h-[200px] lg:h-[325px] lg:object-cover"
            />
          </div>

          {/* Second image row */}
          <div className="flex   flex-col md:flex-row gap-4 relative">
            <Image
              src={about4}
              alt="about4"
              width={500}
              height={500}
              className="w-full mt-[-10px] lg:w-[240px] lg:h-[180] xl:w-[300px] h-[200px] xl:h-[280px] object-cover"
            />
            <Image
              src={about3}
              alt="about3"
              width={500}
              height={500}
              className="w-full lg:w-[274px] h-[200px] lg:h-[285px] object-cover mt-5"
            />
            <div className=" rounded-md bg-gradient-to-t from-[#3528C5] to-[#7367F0] absolute py-6 px-10 top-5 left-[35%] md:left-[20%] lg:left-[5%] xl:left-[20%]">
              <h4 className="font-bold text-[50px] font-roboto text-center text-white">
                10+
              </h4>
              <p className="font-roboto text-cener text-base font-normal text-white">
                years of <br /> experiences
              </p>
            </div>
          </div>
        </div>

        {/* About Us text */}
        <div className="mt-6 md:mt-0">
          <h4 className="text-sm justify-center md:justify-start flex items-center font-semibold font-roboto text-black uppercase mt-10 gap-2">
            About Us <FaTelegramPlane className="text-[#20B038]" />
          </h4>
          <h2 className="w-full  mt-4 font-semibold text-xl sm:text-[50px] text-black font-roboto leading-tight">
            Delivering expert engineering consultancy since 1983.
          </h2>

          <p className="font-normal text-sm sm:text-base font-roboto text-[#8391A1] mt-5">
            AQUA Consultant & Associates Limited was established in Oct., 1983
            as an independent consulting engineering organisation with the
            determination of providing quality consultancy services.
          </p>

            {/* frist checkbox row start */}
          <div className="mt-5 flex flex-col md:flex-row gap-2">
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="safety-guides"
                className="accent-green-600"
              />
              <label
                htmlFor="safety-guides"
                className="font-semibold text-sm text-black"
              >
                Safety Guides
              </label>
            </div>

            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="safety-guides"
                className="accent-green-600"
              />
              <label
                htmlFor="safety-guides"
                className="font-semibold text-sm text-black"
              >
                Integrity In action
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="safety-guides"
                className="accent-green-600"
              />
              <label
                htmlFor="safety-guides"
                className="font-semibold text-sm text-black"
              >
                Integrity In action
              </label>
            </div>
          </div>
            {/* frist checkbox row end */}

            {/* sec checkbox row start */}

          <div className="flex  flex-col md:flex-row mt-3">
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="safety-guides"
                className="accent-green-600"
              />
              <label
                htmlFor="safety-guides"
                className="font-semibold text-sm text-black"
              >
                Safety Guides
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="safety-guides"
                className="accent-green-600"
              />
              <label
                htmlFor="safety-guides"
                className="font-semibold text-sm text-black"
              >
                Integrity In action
              </label>
            </div>
          </div>
         {/* sec checkbox row end */}
         <div className="flex items-center justify-start mt-8">
            <button className="bg-gradient-to-t from-[#20B038] to-[#60D66A] px-5 py-3 rounded font-semibold text-base text-white flex items-center  transition-all duration-500 hover:bg-gradient-to-t hover:from-[#1d623a] hover:to-[#20b14e]">Learn More
            </button>
        </div>
     
        </div>
      </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AboutUs;
