"use client";

import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import Image from 'next/image';

export default function Media() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

//   edit so that there's a mobile, desktop, and wide image
  const images = [
    "/3218.png",        // First image
    "/1618.png",             // Second image
    "/3110.png",             // Third image
    "/4519.png",             // Fourth image
    "/4943.png",             // Fifth image
    "/6103.png",             // Sixth image
    "/5292.png",             // Seventh image
    "/4378.png",             // Eighth image
    "/Bear.png",             // Ninth image
  ];

  // Determine the number of images to show based on the state
  const visibleImages = isExpanded ? images : images.slice(0, 4);

  return (
    <>
      <div className="min-h-[750px] bg-blackLight">
        <div className="min-h-[850px] bg-orange-700 relative">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/buboanimation.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center z-10 font-apercuBold space-y-5">
            <h1 className="text-white text-6xl font-bold">Art, Videos, and More</h1>
            <p className="text-white text-2xl">
              Wholesome content when you&apos;re feeling <span className="text-orange-600">Beat Up</span>.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[850px] flex justify-center items-center bg-blackLight p-4 z-10 -mt-10 ">
        <div className="container mx-auto ml-40">
          <div className="grid grid-cols-2 gap-6">
            {/* Text content section */}
            <div className="flex flex-col justify-center gap-6 text-white mb-40">
              <p className="text-xl font-apercuMedium">WALLPAPER DOWNLOADS</p>
              <h1 className="text-5xl font-apercuBold">Beat Up But Okay</h1>
              <p className="font-apercuRegular text-xl">
                In a world of extremes, we embrace the beauty of just being okay. We weave joy into art that celebrates the imperfect and ordinary.
              </p>
            </div>
            {/* First Image with downloads */}
            <div className="relative">
              <Image
                src="/redpandaPic.png"
                width={615}
                height={530}
                alt="Red Panda"
                className="rounded-xl"
              />
              <div className="absolute top-4 left-4 flex space-x-4">
                <a
                  href="/redpandaPic.png"
                  download
                  className="border-2 border-orange-500 bg-slate-600  hover:bg-black text-white py-2 px-4 rounded"
                >
                  Mobile
                </a>
                <a
                  href="/redpandaPic.png"
                  download
                  className="border-2 border-orange-500 bg-slate-600  hover:bg-black text-white py-2 px-4 rounded"
                >
                  Desktop
                </a>
                <a
                  href="/redpandaPic.png"
                  download
                  className="border-2 border-orange-500 bg-slate-600 hover:bg-black text-white py-2 px-4 rounded"
                >
                  Wide
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[750px] bg-blackLight flex justify-center items-center py-20 sm:py-0">
        <div className="container mx-auto ml-44 -mt-24">
          <div className="grid grid-cols-2 gap-6">
            {visibleImages.map((src, index) => (
              <div key={index} className="relative">
                <Image
                  src={src}
                  width={650}
                  height={650}
                  alt={`Image ${index + 1}`}
                  className="rounded-xl"
                />
                <div className="absolute top-4 left-4 flex space-x-4">
                  <a
                    href={src}
                    download
                    className="border-2 border-orange-500 bg-transparent hover:text-white hover:bg-black text-black py-2 px-4 rounded"
                  >
                    Mobile
                  </a>
                  <a
                    href={src}
                    download
                    className="border-2 border-orange-500 bg-transparent hover:text-white hover:bg-black text-black py-2 px-4 rounded"
                  >
                    Desktop
                  </a>
                  <a
                    href={src}
                    download
                    className="border-2 border-orange-500 bg-transparent hover:text-white hover:bg-black text-black py-2 px-4 rounded"
                  >
                    Wide
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12 h-28 ">
            <button
              onClick={toggleExpand}
              className="primary-btn ml-auto "
            >
              <div className='flex flex-row '>
                {isExpanded ? 
                    <MdKeyboardArrowUp className='w-8 h-8 mr-8' />
                    :
                    <MdKeyboardArrowDown className='w-8 h-8 mr-8' />
                }
                <h1 className='text-xl'>
                    {isExpanded ? 
                        'View Less' 
                        : 
                        'View More'}
                </h1>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}