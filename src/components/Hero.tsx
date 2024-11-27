import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-5 md:py-10">
      <MaxWidthWrapper>
        <div>
          <h1 className=" text-xl sm:text-2xl md:text-[64px]  sm:leading-[80px] font-medium w-full sm:w-[80%] mx-auto text-center mt-10 font-roboto">
            Aqua Consultant & Associates Limited
          </h1>
          <p className="	 font-roboto font-normal text-sm	sm:text-base  text-[#8391A1]  w-full sm:w-[60%] mx-auto text-center mt-4">
            With an enthusiasm for innovating and dedication to quality, we are
            experts in offering extensive consulting services that are
            customized to meet your specific requirements
          </p>

          <div className="flex items-center justify-center mt-8">
            <Link
              href="/contact-us"
              className="bg-gradient-to-t from-[#20B038] to-[#60D66A] px-5 py-3 rounded font-semibold text-base text-white flex items-center gap-2 transition-all duration-500 hover:bg-gradient-to-t hover:from-[#1d623a] hover:to-[#20b14e]"
            >
              Get in Touch <FaLongArrowAltRight size={20} />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
