import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Collectibles() {
  return (
    <>
        <div className="background-image-collectibles w-screen h-full relative flex flex-row-reverse items-center min-h-[950px]">
        </div>
        <div className="min-h-[850px] -mt-72 flex justify-center items-center bg-blackLight p-4 z-10">
            <div className="container ml-40">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Image section */}
                    <div className="flex justify-center items-center relative">
                        <div className="bg-white absolute rounded-lg w-[590px] h-[669px] flex flex-col items-center justify-center">
                            <Image
                            src="/4488.png"
                            width={560}
                            height={620}
                            alt="BUB 4488"
                            className="relative z-10 rounded-md mb-2"
                            />
                            <div className="relative z-10 flex items-center font-apercuRegular justify-between w-full px-4 mb-2">
                            <div className="text-lef mt-2">
                                <h1 className="text-black text-3xl">#4488</h1>
                                <p className="text-gray-500 text-md">Beat Up Bears</p>
                            </div>
                            <div className="text-right text-white bg-black rounded-md w-10 h-5 mb-4">
                                <p className="text-center text-xs mt-1">SOL</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* Text content section */}
                    <div className="flex flex-col justify-center gap-6 sm:pt-0 ml-16 text-white">
                        <p className="text-xl font-apercuMedium">Beyond the Bruises</p>
                        <h1 className="text-5xl font-apercuBold">Exploring Collectible Options for Beat Up Bears</h1>
                        <p className="font-apercuRegular text-lg">
                        Beat Up Bears is a collection of 8,888 unique digital collectibles that represents an online cultural shift, proudly embodying the idea of being beat up, but okay. 
                        The brand was launched in April 2022 and broke all digital collectible records by generating an unprecedented $18 million in sales within 24 hours of its launch.
                        </p>
                        <p className="text-lg font-apercuRegular">
                        The memorable art and core positive message, "Beat up but okay," resonated with digital collectors, leading to the rapid growth of a global community that strives to be a force for good.
                        </p>
                        <Link href="/" className="primary-btn mt-6 text-xl font-apercuRegular text-center">
                            <p className="mb-10">BROWSE OUR BUBS</p>
                        </Link>
                    </div>
                </div>
            </div>
      </div>
      <div className='min-h-[950px] bg-blackLight flex flex-col items-center justify-center'> 
        <div className="container mt-20">  
          <div className="grid grid-cols-1 sm:grid-cols-[400px_auto] gap-10 -mt-24 ml-16">
            {/* Left column with two smaller images stacked */}
            <div className="flex flex-col gap-6 w-[400]">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/1801.png"
                  alt="1801 bub"
                  width={400}
                  height={400}
                  className="rounded-xl"
                />
              </div>
              <div className="relative w-full h-[365px]">
                <Image
                  src="/6210.png"
                  alt="6210 bub"
                  width={400}
                  height={400}
                  className="rounded-xl"
                />
              </div>
            </div>
            {/* Right column with the larger image */}
            <div className="flex justify-end w-[823px] h-[825px]">
              <div className="relative w-full h-full">
                <Image
                  src="/2359.png"
                  alt="2459 bub"
                  width={825}
                  height={825}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

