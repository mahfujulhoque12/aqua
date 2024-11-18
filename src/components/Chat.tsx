"use client";
import React from "react";
import chat from "/public/chat/chat.png"; 
import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import { FaTelegramPlane } from "react-icons/fa";
import Msg from "./Msg";
import Image from "next/image";

const Chat: React.FC = () => {
  return (
    <section className="py-5 md:py-10 mt-10">
      <MaxWidthWrapper>
        <div className="text-white relative">
          <Image src={chat} alt="img" width={1000} height={500} className="w-full h-[300px] 
          md:h-[600px]"/>
          <div className="grid grid-cols-1 lg:grid-cols-1">
            <div className="flex flex-col justify-start mt-10 p-4">
              <div className="absolute top-[10%] sm:top-[8%] md:top-[16%] lg:top-[30%] left-[5%]">
                <h4 className="text-sm justify-start flex items-center font-semibold font-roboto text-white uppercase gap-2">
                  Contact US <FaTelegramPlane className="text-[#20B038]" />
                </h4>
                <h2 className="w-full text-white mt-4 md:w-[70%] lg:w-[35%] font-semibold text-lg sm:text-xl md:text-[50px] font-roboto md:leading-[60px]">
                  Let’s Chat, Reach Out to us
                </h2>
                <p className="font-normal w-[90%] sm:w-[80%] md:w-[80%] lg:w-[50%] text-sm sm:text-base font-roboto text-white mt-5">
                  AQUA Consultant & Associates Limited was established in Oct. 1983 as an independent consulting engineering organisation with the determination of providing quality consultancy services.
                </p>
              </div>
            </div>
            <div className="relative lg:absolute lg:top-0 lg:left-[60%]">
              {/* Apply absolute positioning for desktop, but retain the grid layout for mobile/tablet */}
              <Msg />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Chat;
