"use client"
import React, { useState } from "react";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import { FaTelegramPlane } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

type ServiceItem = {
  id: number;
  title: string;
};

const Services: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const services: ServiceItem[] = [
    { id: 1, title: "Master Planning" },
    { id: 2, title: "Architectural Design" },
    { id: 3, title: "Interior Design" },
    { id: 4, title: "Structural Engineering" },
    { id: 5, title: "Electrical Engineering" },
    { id: 6, title: "Mechanical Engineering" },
    { id: 7, title: "Project Management" },
    { id: 8, title: "Sustainability Consulting" },
    { id: 9, title: "Construction Supervision" },
  ];

  const visibleServices = showAll ? services : services.slice(0, 7);

  return (
    <section className="py-5 md:py-10 bg-[#2B5240]">
      <MaxWidthWrapper>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
          <div className="mt-12">
            <h4 className="text-sm text-[#E2F0FF] flex items-center font-semibold font-roboto uppercase gap-2">
              Our Services <FaTelegramPlane className="text-[#20B038]" />
            </h4>
            <h2 className="mt-4 font-semibold text-xl md:text-[50px] text-white font-roboto leading-tight">
              Powering success with cutting-edge engineering solutions!
            </h2>
            <p className="text-sm md:text-base font-roboto font-normal text-[#E2F0FF] mt-5">
              AQUA specialists and professionals provide the following comprehensive consultancy service to national institutions both at government and non-government levels.
            </p>
          </div>
          <div>
            <div className="ml-0 md:ml-16">
              {visibleServices.map((service) => (
                <div key={service.id} className="flex justify-between border-b pb-3 mt-4">
                  <div className="flex gap-5 text-white font-normal text-sm">
                    <p>{service.id.toString().padStart(2, "0")}</p>
                    <p>{service.title}</p>
                  </div>
                  <div className="text-white font-normal text-sm">
                    <FaArrowRightLong />
                  </div>
                </div>
              ))}
              {services.length > 7 && (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="text-base font-normal text-white mt-5"
                >
                  {showAll ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Services;
