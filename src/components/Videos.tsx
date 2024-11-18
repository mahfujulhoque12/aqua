"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

type VideoData = {
  url: string;
  thumbnail: string;
};

const videoData: VideoData[] = [
  {
    url: "https://www.youtube.com/embed/m55PTVUrlnA",
    thumbnail: "/video/video1.png",
  },
  {
    url: "https://www.youtube.com/embed/JblrN5oNse4",
    thumbnail: "/video/video3.png",
  },
  {
    url: "https://www.youtube.com/embed/bNnhr_bIR9c",
    thumbnail: "/video/video3.png",
  },
];

const Videos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setActiveVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setActiveVideoUrl(null);
    setIsModalOpen(false);
  };

  return (
    <section className="py-5 md:py-12 bg-[#F4F9FF]">
      <MaxWidthWrapper>
        <div>
          <h4 className="text-sm text-center justify-center flex items-center font-semibold font-roboto text-black uppercase  gap-2">
            Videos <FaTelegramPlane className="text-[#20B038]" />
          </h4>
          <h2 className="w-full text-xl  md:w-[60%] mx-auto text-center mt-3 font-semibold md:text-[50px] text-black font-roboto leading-tight">
            Explore our projects and see our expertise in action!
          </h2>
        </div>
        {/* video */}
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
          {videoData.map((video, index) => (
            <div key={index} onClick={() => openModal(video.url)} className="cursor-pointer">
              <Image
                src={video.thumbnail}
                alt={`Video thumbnail ${index + 1}`}
                width={700}
                height={300}
                className=" h-[250px]"
              />
            </div>
          ))}
        </div>
        {isModalOpen && activeVideoUrl && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-1 right-1 text-gray-700 hover:text-gray-900"
                onClick={closeModal}
              >
                <IoClose />
              </button>
              <iframe
                width="100%"
                height="400"
                className="rounded-md"
                src={activeVideoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </section>
  );
};

export default Videos;
