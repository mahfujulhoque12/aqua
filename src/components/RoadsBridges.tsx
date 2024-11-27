"use client";

import Image from "next/image";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import water1 from "/public/sector/road1.png";
import water2 from "/public/sector/road2.png";
import water3 from "/public/sector/road3.png";
import water4 from "/public/sector/road4.png";
import water5 from "/public/sector/road5.png";
import water6 from "/public/sector/road6.png";
import water7 from "/public/sector/road7.png";
import { IoMdCloseCircleOutline } from "react-icons/io";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

type SectorData = {
  id: number;
  image: string;
  title: string;
  des:string;
};

const sectorData: SectorData[] = [
  {
    id: 1,
    image: water1.src,
    title: "Groundwater Potential Studies",
    des:"Description about the project goes here. You can add more details if needed.",
  },
  {
    id: 2,
    image: water2.src,
    title: "Surface Water Abstraction and Intake",
    des:"Description about the project goes here. You can add more details if needed.",
  },
  {
    id: 3,
    image: water3.src,
    title: "Water Pumping Stations",
    des:"Description about the project goes here. You can add more details if needed.",
  },
  {
    id: 4,
    image: water4.src,
    title: "Water Treatment",
    des:"Description about the project goes here. You can add more details if needed.",
  },
  {
    id: 5,
    image: water5.src,
    title: "Water Transmission Pipelines",
    des:"Description about the project goes here. You can add more details if needed.",
  },
  {
    id: 6,
    image: water6.src,
    title: "Rainwater Harvesting",
    des:"Description about the project goes here. You can add more details if needed.",
  },
  {
    id: 7,
    image: water7.src,
    title: "Automation and SCADA Studies",
    des:"Description about the project goes here. You can add more details if needed.",
  },
];

const RoadsBridges = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SectorData | null>(null);

  const openModal = (item: SectorData) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <section className="py-5 md:py-10" id="road">
      <MaxWidthWrapper>
        <div>
          <h2 className="w-full text-black font-semibold text-lg sm:text-xl md:text-[50px] font-roboto md:leading-[60px]">
          Roads And Bridges
          </h2>
          <p className="text-gray-500 mt-5 font-semibold text-sm md:text-base">
          Auqa expertise covers all aspects of NRW and Leak Detection studies starting from Intake to WTP to transmission and distribution systems and all the way to customer property connections. The major disciplines covered in water audits and NRW studies are:
          </p>

          {/* List Items */}
  
            <li  className="text-base font-medium text-gray-700 mt-3">Ground water potential studies and abstraction</li>
            <li  className="text-base font-medium text-gray-700 mt-3">Surface water abstraction and intake</li>
            <li  className="text-base font-medium text-gray-700 mt-3">Water pumping stations</li>
            <li  className="text-base font-medium text-gray-700 mt-3">Water treatment</li>
            <li  className="text-base font-medium text-gray-700 mt-3">Water transmission and cross country pipelines</li>
        
            <li  className="text-base font-medium text-gray-700 mt-3"> Power Generation from Waste gases</li>
            
            <li  className="text-base font-medium text-gray-700 mt-3">Privatization of  Solid waste management </li>
            <li  className="text-base font-medium text-gray-700 mt-3">Scientific closure and Remediation of Contaminated  Landfill sites </li>


          <h3 className="text-lg md:text-2xl font-semibold text-black mt-5">
            Major Projects
          </h3>

          {/* Carousel */}
          <Carousel>
            <CarouselContent className="mt-5 h-full">
              {sectorData.map((data) => (
                <CarouselItem
                  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  key={data.id}
                >
                  <div
                    className="border bg-gray-100 cursor-pointer flex flex-col  h-full"
                    onClick={() => openModal(data)}
                  >
                    <Image
                      src={data.image}
                      alt={data.title}
                      width={700}
                      height={400}
                      className="h-[200px] object-cover w-full"
                    />
                    <p className="text-base text-gray-800 font-semibold px-2 py-1">
                      {data.title}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {/* Modal */}
          {isModalOpen && selectedItem && (
            <div   onClick={closeModal} className="  fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white relative rounded-lg p-5 max-w-xl w-full shadow-lg">
                <button
                  className="absolute top-1 right-1 rounded-full text-white bg-red-500 hover:text-black"
                  onClick={closeModal}
                >
                  <IoMdCloseCircleOutline size={25}/>

                </button>
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  width={700}
                  height={400}
                  className="rounded-lg w-[600px] h-[350px]"
                />
                <h2 className="text-lg font-bold text-black mt-4">
                  {selectedItem.title}
                </h2>
                <p className="text-gray-600 mt-2">
                  {selectedItem.des}
                </p>
              </div>
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default RoadsBridges;
