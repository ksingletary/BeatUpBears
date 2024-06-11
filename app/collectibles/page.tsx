import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CollectibleOffers from './CollectibleOffers';
import Perks from './Perks';
import { RiBearSmileLine } from "react-icons/ri";

export default function Collectibles() {
  return (
    <>
        <div className="bg-blue-800  flex flex-row items-center justify-end min-h-[950px]">
            <div className='flex flex-col mb-52 items-center space-y-4'>
                <h1 className='font-apercuBold text-5xl text-white ml-40'>Expanding the BUB Universe</h1>
                <p className='font-apercuRegular text-xl text-white ml-40'>Collect your Beat Up Bear in both physical and digital form.</p>
                <div className="flex justify-center space-x-6 ml-36">
                    <Link href="/shop" className="text-orange-600">
                        <RiBearSmileLine className='w-12 h-12' />
                    </Link>                            
                </div>
            </div>          
            <Image src="/sticker.png" alt="bear collectible" width={700} height={700} className=" mb-52" />
        </div>
        <div className="min-h-[850px] -mt-72 flex justify-center items-center bg-blackLight p-4 z-10">
            <div className="container ml-40">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Image section */}
                    <div className="flex justify-center items-center relative">
                        <div className="bg-white absolute rounded-lg w-[590px] h-[669px] flex flex-col items-center justify-center">
                            <Image
                            src="/3029.png"
                            width={540}
                            height={540}
                            style={{width:'auto', height: "auto" }}
                            alt="BUB 3029"
                            className="relative z-10 rounded-md mb-2 w-auto h-auto"
                            />
                            <div className="relative z-10 flex items-center font-apercuRegular justify-between w-full px-4 mb-2">
                                <div className="text-lef mt-2">
                                    <h1 className="text-black text-3xl">#3029</h1>
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
                        The memorable art and core positive message, &quot;Beat up but okay&quot;, resonated with digital collectors, leading to the rapid growth of a global community that strives to be a force for good.
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
                            src="/5181.png"
                            alt="5181 bub"
                            width={400}
                            height={400}
                            className="rounded-xl"
                            />
                        </div>
                        <div className="relative w-full h-[365px]">
                            <Image
                            src="/3700.png"
                            alt="3700 bub"
                            width={400}
                            height={400}
                            className="rounded-xl"
                            />
                        </div>
                    </div>
                    {/* Right column with the larger image */}
                    <div className="flex justify-end w-[823px] h-[825px] ">
                        <div className="relative w-full h-full ">
                            <Image
                            src="/3715.png"
                            alt="3715 bub"
                            width={825}
                            height={825}
                            className="rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CollectibleOffers />
        <Perks />
        <div className="min-h-[500px] flex justify-center items-center bg-orange-700">
            <div className="container flex flex-col sm:flex-row items-center justify-center gap-6 mr-10">
                <div className="sm:w-1/2 mb-10">
                    <div className="flex flex-row space-x-4 mb-8">
                        <Image src="/tigersUnited.png" alt="endangered tigers logo" width={100} height={100} style={{width:'auto', height: "auto" }} className="text-white" />
                        <Image src="/multipleSclerosis.png" alt="multiple sclerosis logo" width={100} height={100} style={{width:'auto', height: "auto" }} className="text-white" />
                        <Image src="/woundedwarriors.png" alt="wounded warriors logo" width={100} height={100} style={{width:'auto', height: "auto" }} className="text-white" />
                    </div>
                    <h1 className="text-5xl text-white font-apercuBold">Mindful Minting</h1>
                    <p className="text-lg text-white mt-4">Rare digital collectibles making the world a better place.</p>
                    <Link href="/footprint" className="primary-btn mt-10 text-xl font-apercuRegular text-center inline-block py-3 px-6 bg-blackLight text-white rounded-lg " > 
                        View More
                    </Link>
                </div>
                <div className="sm:w-1/2 flex justify-center">
                    <Image src="/7808.png" alt="7808 bub " width={600} height={600} />
                </div>
            </div>
        </div>
    </>
  )
}

