"use client";

import Image from "next/image";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import water1 from "/public/sector/inter1.png";
import water2 from "/public/sector/inter2.png";
import water3 from "/public/sector/inter3.png";
import water4 from "/public/sector/inter4.png";
import water5 from "/public/sector/inter5.png";
import water6 from "/public/sector/inter6.png";
import water7 from "/public/sector/inter1.png";
import { IoMdCloseCircleOutline } from "react-icons/io";
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

const Projects = () => {
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
    <section className="py-5 md:py-10">
      <MaxWidthWrapper>
        <div>
          <h2 className="w-full text-black font-semibold text-lg sm:text-xl md:text-[50px] font-roboto md:leading-[60px]">
          Our Valuable Projects
          </h2>
          <p className="text-gray-500 mt-5 font-semibold text-sm md:text-base">
          Auqa expertise covers all aspects of NRW and Leak Detection studies starting from Intake to WTP to transmission and distribution systems and all the way to customer property connections. The major disciplines covered in water audits and NRW studies are:
          </p>



          {/* Carousel */}
          
            <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {sectorData.map((data) => (
                <div
                  className="mt-5"
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
                </div>
              ))}
          </div>
   

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

export default Projects;
