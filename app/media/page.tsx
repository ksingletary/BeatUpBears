"use client";

import { useState } from 'react';
import Link from 'next/link';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaBandcamp, FaSpotify, FaSoundcloud } from "react-icons/fa";

import Image from 'next/image';

export default function Media() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

//   edit so that there's a mobile, desktop, and wide image
  const images = [
    "/3218.png",        // First image
    "/3299.png",             // Second image
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
                <div className="absolute top-20 left-1/2 ml-20 transform -translate-x-1/2 text-center z-10 font-apercuBold space-y-5">
                    <h1 className="text-white text-6xl font-bold">Art, Videos, and More</h1>
                    <p className="text-white text-2xl">
                    Wholesome content when you&apos;re feeling <span className="text-orange-600">Beat Up</span>.
                    </p>
                </div>
            </div>
        </div>
        <div className="min-h-[850px] flex justify-center items-center bg-blackLight p-4 z-10 -mt-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-6 justify-items-start pl-28">
                    {/* Text content section */}
                    <div className="flex flex-col justify-center gap-6 text-white mb-40">
                        <p className="text-xl font-apercuMedium">WALLPAPER DOWNLOADS</p>
                        <h1 className="text-5xl font-apercuBold">Beat Up But Okay</h1>
                        <p className="font-apercuRegular text-xl">
                            In a world of extremes, we find beauty in simply being beat up and worn down. Our art celebrates imperfections and everyday moments with joy.
                        </p>
                    </div>
                    {/* First Image with downloads */}
                    <div className="relative w-[630px] h-[710px]">
                        <Image
                            src="/redpandaPic.png"
                            width={700}
                            height={700}
                            alt="Red Panda"
                            className="rounded-xl"
                        />
                        <div className="absolute top-4 left-4 flex space-x-4">
                            <a
                                href="/redpandaPic.png"
                                download
                                className="border-2 border-orange-500 bg-slate-600 hover:bg-black text-white py-2 px-4 rounded-xl"
                            >
                                Download
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="min-h-[750px] bg-blackLight items-center py-20 sm:py-0">
            <div className="container mx-auto -mt-24">
                <div className="grid grid-cols-2 gap-40 justify-items-start">
                    {visibleImages.map((src, index) => (
                        <div key={index} className="relative w-[630px] h-[710px] ">
                            <Image
                                src={src}
                                width={700}
                                height={700}
                                alt={`Image ${index + 1}`}
                                className="rounded-xl object-cover w-[630px] h-[710px]"
                            />
                            <div className="absolute top-4 left-4 flex space-x-4">
                                <a
                                    href={src}
                                    download
                                    className="border-2 border-orange-500 bg-transparent hover:text-white hover:bg-black text-black py-2 px-4 rounded-xl"
                                >
                                    Download
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-12 h-28 ml-20">
                    <button
                        onClick={toggleExpand}
                        className="primary-btn ml-auto"
                    >
                        <div className="flex flex-row">
                            {isExpanded ? 
                                <MdKeyboardArrowUp className="w-8 h-8 mr-8" /> : 
                                <MdKeyboardArrowDown className="w-8 h-8 mr-8" />
                            }
                            <h1 className="text-xl">
                                {isExpanded ? 'View Less' : 'View More'}
                            </h1>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div className="relative min-h-[250px] bg-blackLight">
            <div className=" font-apercuBold flex flex-col justify-center h-48  ml-44">
                <h1 className="text-white text-7xl font-bold mb-4">Art speaks where words fail.</h1>
                <p className="text-orange-600 text-xl">Victor Hugo</p>
            </div>
        </div>
        <div>
            <div className="relative min-h-[650px] bg-orange-700">
                <video 
                    className="absolute inset-0 w-full h-full object-cover" 
                    src="/Bear_30s.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                />
                <div className="relative font-apercuBold z-10 flex flex-col items-center justify-center h-full text-center pt-64 ml-10">
                    <h1 className="text-white text-5xl font-bold mb-4 ml-28">Experimental Beatmakers</h1>
                    <p className="text-white text-xl">We have artists around the world creating music for our <span className='text-orange-500'>bubs</span>!</p>
                </div>
            </div>
      </div>
      <div className='min-h-[550px] bg-blackLight flex flex-col justify-center '>
        <div className='container mx-auto'>
            <div className='space-y-4'>
                <h1 className='text-5xl text-white font-apercuBold'>Platforms for our <span className='text-orange-500'>BUB</span> Beatmakers</h1>
                <p className='text-2xl text-white font-apercuRegular'>
                    Perfect for exploring, studying or working, our mix tapes will add a unique and nostalgic vibe to your daily routine.
                </p>                            
            </div>
            
            <div className='flex justify-center mt-12 space-x-8'>
                <Link href="https://bandcamp.com/">
                    <FaBandcamp className='w-40 h-40 hover:text-blue-500 text-blue-400' />
                </Link>
                <Link href="https://open.spotify.com/">
                    <FaSpotify className='w-40 h-40 hover:text-green-600 text-green-500' />  
                </Link>
                <Link href="https://soundcloud.com/discover">
                    <FaSoundcloud className='w-40 h-40 hover:text-blue-600 text-blue-500' />                
                </Link>
            </div>
        </div>
      </div>
      
    </>
  );
}