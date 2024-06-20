import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CollectibleOffers from './CollectibleOffers';
import Perks from './Perks';
import { RiBearSmileLine } from "react-icons/ri";

export default function Collectibles() {
  return (
    <>
        <div className="background-image-collectibles flex flex-row items-center justify-center min-h-[950px]">
            <div className='flex flex-col mb-52 items-center space-y-4 pl-80'>
                <h1 className='font-apercuBold text-5xl text-white '>Expanding the BUB Universe</h1>
                <p className='font-apercuRegular text-xl text-white'>Collect your Beat Up Bear in both physical and digital form.</p>
                <div className="flex justify-center space-x-6 ">
                    <Link href="/shop" className="text-orange-600">
                        <RiBearSmileLine className='w-12 h-12' />
                    </Link>                            
                </div>
            </div>          
            <Image src="/sticker.png" alt="bear collectible" width={700} height={700} className=" rotate-12 mb-52" />
        </div>
        <div className="min-h-[850px] -mt-72 flex justify-center items-center bg-blackLight p-4 z-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Image section */}
                    <div className="flex justify-center items-center relative">
                        <div className="bg-white lg:absolute lg:left-0 rounded-lg w-[630px] h-[710px] flex flex-col items-center justify-center">
                            <Image
                            src="/3029.png"
                            width={550}
                            height={550}
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
                    <div className="flex flex-col w-full justify-center gap-6 sm:pt-0 ml-28 text-white">
                        <p className="text-xl font-apercuMedium">Beyond the Bruises</p>
                        <h1 className="text-5xl font-apercuBold">Exploring Collectible Options for Beat Up Bears</h1>
                        <p className="font-apercuRegular text-lg">
                            The Beat Up Bears NFT collection features 8,888 unique digital collectibles, each a one-of-a-kind bear image. 
                            These collectible bears represent a trend in online culture where imperfections are celebrated. Launched in April 2022, the project shattered records in the digital collectibles market, generating a staggering $18 million in sales within just 24 hours. 
                            Owning a Beat Up Bear NFT grants you ownership of a unique digital item as well as potential for physical items, much like a rare trading card or piece of art.
                        </p>
                        <p className="text-lg font-apercuRegular">
                            The Beat Up Bears NFT project, with its unique and endearing characters, captures the essence of resilience and positivity. Each collectible bear tells a story of overcoming challenges, making them not just digital assets but symbols of strength and hope.
                        </p>
                        <Link href="#" className="primary-btn mt-6 text-xl font-apercuRegular text-center">
                            <p className="mb-10">BROWSE OUR BUBS</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='min-h-[950px] bg-blackLight flex flex-col items-center justify-center'> 
            <div className="container mt-20">  
                <div className="grid grid-cols-1 sm:grid-cols-[400px_auto] gap-10 -mt-24">
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
            <div className="container flex flex-col sm:flex-row items-center justify-center space-x-20 ">
                <div className="sm:w-1/3 mb-10 ">
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
                <div className="relative sm:w-1/2 flex justify-center">
                    <Image src="/7808.png" alt="7808 bub " width={600} height={600} />
                    <Image src="/BUB3.png" alt="bub logo " width={250} height={250} className='absolute -right-64 top-0 ' />

                </div>
            </div>
        </div>
    </>
  )
}

