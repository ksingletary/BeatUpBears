"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { RiBearSmileLine } from "react-icons/ri";
import { GiBearFace, GiCoins, GiWorld } from "react-icons/gi";
import { PiLineVerticalBold, PiSticker } from "react-icons/pi";
import { SiWeb3Dotjs } from "react-icons/si";
import { IoShirtSharp } from "react-icons/io5";
import { MdOutlineDiscount } from "react-icons/md";


type PerkType = 'companion' | 'community' | 'discounts' | 'events' | 'investment' | 'collectibles';

const perks: Record<PerkType, { title: string; description: string; image1: string; image2: string }> = {
  companion: {
    title: 'Exclusive Physical Companion',
    description: 'Your Physical Companion in the Beat Up Bears NFT collection offers holders a unique, tangible experience. Each NFT grants access to a custom-designed, physical bear companion, crafted to mirror its digital counterpart. These bears provide comfort, a sense of ownership, and a deeper connection to the NFT. Enjoy the perfect blend of digital innovation and physical interaction, enhancing your Beat Up Bears journey with a truly exclusive benefit.',
    image1: '/3280.png',
    image2: '/7428.png',
  },
  community: {
    title: 'Community Access',
    description: 'Community access provides Beat Up Bears NFT holders with entry to an exclusive online community. Connect with fellow collectors, share insights, participate in discussions, and collaborate on future projects. This tight-knit network fosters creativity, support, and shared experiences, enhancing the value and enjoyment of your Beat Up Bears collection through meaningful interactions and collective growth.',
    image1: '/4272.png',
    image2: '/5642.png',
  },
  discounts: {
    title: 'Early Access & Discounts',
    description: 'We offer Beat Up Bears NFT holders the advantage of previewing new releases and purchasing at reduced prices. Stay ahead of the crowd with exclusive early access to upcoming collections and enjoy special discounts on select items. This benefit ensures you are always at the forefront of the Beat Up Bears universe, securing your favorite pieces at the best value.',
    image1: '/3200.png',
    image2: '/3684.png',
  },
  events: {
    title: 'Real-world Events',
    description: 'Attend real Beat Up Bears NFT events. Holders get access to exclusive gatherings and experiences. Visit special events, meetups, and conventions designed for the community, providing opportunities to connect in person, share your passion, and celebrate your collection. These events offer unique experiences and memories, enhancing your journey as a Beat Up Bears collector.',
    image1: '/3029.png',
    image2: '/7304.png',
  },
  investment: {
    title: 'Investment Value',
    description: 'We always want to highlight the potential financial benefits of owning a Beat Up Bears NFT. Each NFT is a unique digital asset with the potential for appreciation over time. By holding and trading these exclusive tokens, you can benefit from the growing market and demand, making your investment in Beat Up Bears not only a passion project but also a lucrative opportunity.',
    image1: '/6999.png',
    image2: '/2633.png',
  },
  collectibles: {
    title: 'Surprise Collectible Drops',
    description: 'Enjoy unexpected releases of limited-edition collectibles, available exclusively to the community. These surprise drops offer unique, rare items that enhance your collection, providing delightful and valuable additions that keep the Beat Up Bears experience fresh and engaging.',
    image1: '/2359.png',
    image2: '/6210.png',
  },
};

export default function Collectibles() {

    const [selectedPerk, setSelectedPerk] = useState<PerkType>('companion')

    
  return (
    <>
        <div className="bg-blue-800 flex flex-row items-center justify-end min-h-[950px] -mr-16">
            <div className='flex flex-col mb-52 items-center space-y-4'>
                <h1 className='font-apercuBold text-5xl text-white ml-40'>Expanding the BUB Universe</h1>
                <p className='font-apercuRegular text-xl text-white ml-40'>Collect your Beat Up Bear in both physical and digital form.</p>
                <div className="flex justify-center space-x-6 ml-36">
                    <Link href="/shop" className="text-orange-600">
                        <RiBearSmileLine className='w-12 h-12' />
                    </Link>                            
                </div>
            </div>          
            <Image src="/sticker.png" alt="bear collectible" width={700} height={700} className=" mb-52 rotate-12" />
        </div>
        <div className="min-h-[850px] -mt-72 flex justify-center items-center bg-blackLight p-4 z-10">
            <div className="container ml-40">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Image section */}
                    <div className="flex justify-center items-center relative">
                        <div className="bg-white absolute rounded-lg w-[590px] h-[669px] flex flex-col items-center justify-center">
                            <Image
                            src="/3029.png"
                            width={560}
                            height={620}
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
                <div className="flex justify-end w-[823px] h-[825px]">
                <div className="relative w-full h-full">
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
        <div className='min-h-[950px] flex flex-col justify-center items-center bg-blackDark'>
            <div className='flex flex-col justify-center text-white text-center ml-28 space-y-6'>
                <h1 className='text-4xl font-apercuBold'>Collectible Offers</h1>
                <p className='font-apercuRegular max-w-lg mx-auto'>
                    Brand is a promise to your customers. Culture is how you deliver it. Learn more about our values, how we work, and how hypergrowth meets impact at Beat Up Bears.
                </p>
                <button className='primary-btn ml-28'>
                    Learn More
                </button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20 ml-48 mt-20'>
                <div className='flex flex-col space-y-2 '>
                    <div className='ml-4'>
                        <GiBearFace className='w-14 h-14 text-orange-600 mb-8'/>
                        <h1 className='text-white text-2xl font-apercuBold'>Members Come First</h1>
                    </div>              
                    <div className='flex flex-row items-start'>
                        <PiLineVerticalBold className='w-10 h-10 text-orange-600' />
                        <p className='text-white text-lg font-apercuRegular mt-2'>We are genuine member advocates</p>
                    </div>
                </div>
                <div className='flex flex-col space-y-2 '>
                    <div className='ml-4'>
                        <PiSticker className='w-14 h-14 text-green-600 mb-8'/>
                        <h1 className='text-white text-2xl font-apercuBold'>Rep Your Bear Sticker</h1>
                    </div>              
                    <div className='flex flex-row items-start'>
                        <PiLineVerticalBold className='w-10 h-10 text-orange-600' />
                        <p className='text-white text-lg font-apercuRegular mt-2'>Customize your gear</p>
                    </div>
                </div>
                <div className='flex flex-col space-y-2 '>
                    <div className='ml-4'>
                        <SiWeb3Dotjs className='w-14 h-14 text-blue-600 mb-8'/>
                        <h1 className='text-white text-2xl font-apercuBold'>Web3 Advocate</h1>
                    </div>              
                    <div className='flex flex-row items-start'>
                        <PiLineVerticalBold className='w-10 h-10 text-orange-600' />
                        <p className='text-white text-lg font-apercuRegular mt-2'>Building the Decentralized Future</p>
                    </div>
                </div>
                <div className='flex flex-col space-y-2 '>
                    <div className='ml-4'>
                        <Image src="/solana-sol-logo.svg" alt="solana logo" width={100} height={100} className="w-14 h-14"/>
                        <h1 className='text-white text-2xl font-apercuBold mt-8'>Solana-Backed BUBs</h1>
                    </div>              
                    <div className='flex flex-row items-start mr-14 '>
                        <PiLineVerticalBold className='w-20 h-16 text-orange-600' />
                        <p className='text-white text-lg font-apercuRegular mt-2'>Own your BUB in both realms. Solana fuels the experience.</p>
                    </div>
                </div>
                <div className='flex flex-col space-y-2 '>
                    <div className='ml-4'>
                        <GiCoins className='w-14 h-14 text-blue-600 mb-8'/>
                        <h1 className='text-white text-2xl font-apercuBold'>Collect Coins</h1>
                    </div>              
                    <div className='flex flex-row items-start'>
                        <PiLineVerticalBold className='w-20 h-16 text-orange-600' />
                        <p className='text-white text-lg font-apercuRegular mt-2'>We achieve impact by innovation & evidence-based frameworks</p>
                    </div>
                </div>
                <div className='flex flex-col space-y-2 '>
                    <div className='ml-4'>
                        <IoShirtSharp className='w-14 h-14 text-yellow-800 mb-8'/>
                        <h1 className='text-white text-2xl font-apercuBold'>Beat Up Bear Tees</h1>
                    </div>              
                    <div className='flex flex-row items-start'>
                        <PiLineVerticalBold className='w-10 h-10 text-orange-600' />
                        <p className='text-white text-lg font-apercuRegular mt-2'>Gear Up: Beat Up Bear Apparel</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='min-h-[1000px] flex flex-col justify-center bg-blackLight p-4'>
            <div className='flex flex-col justify-center text-white text-center ml-28 space-y-6 mb-10'>
                <h1 className='text-4xl font-apercuBold'>Our <span className='text-orange-600'>perks & benefits</span></h1>
                <p className='font-apercuRegular max-w-lg mx-auto'>
                Brand is a promise to your customers. Culture is how you deliver it. Learn more about our values, how we work, and how hypergrowth meets impact at Beat Up Bears.
                </p>
            </div>
            <div className='container mx-auto mt-10 mr-10'>
                <div className='grid grid-cols-1 lg:grid-cols-[2fr_2fr] gap-3'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        <button className={`h-40 hover:bg-gray-500 bg-gray-400 rounded-xl p-4 relative font-apercuMedium ${selectedPerk === 'companion' ? 'bg-gray-500' : 'bg-gray-400'}`} onClick={() => setSelectedPerk('companion')}>
                            <div className='h-full flex items-center justify-center relative z-10'>
                                <div className='absolute w-10 h-10 left-5 top-2 bg-orange-500 rounded-full -z-10'></div>
                                <div className='relative z-10'>
                                    <Image src="/beartoy.png" alt="bear toy" width={50} height={50} className='mb-2' />
                                    <p className='text-center text-lg mt-8'>Exclusive Physical Companion</p>
                                </div>
                            </div>
                        </button>
                        <button className={`h-40 hover:bg-gray-500 bg-gray-400 rounded-xl p-4 relative font-apercuMedium ${selectedPerk === 'community' ? 'bg-gray-500' : 'bg-gray-400'}`} onClick={() => setSelectedPerk('community')}>
                            <div className='h-full flex items-center justify-center relative z-10'>
                                <div className='absolute w-10 h-10 left-5 top-2 bg-orange-500 rounded-full -z-10'></div>
                                <div className='relative z-10'>
                                    <Image src="/community.png" alt="community Icon " width={50} height={50} className='mb-2 -ml-10' />
                                    <p className='text-center text-lg mt-8'>Community Access</p>
                                </div>
                            </div>
                        </button>
                        <button className={`h-40 hover:bg-gray-500 bg-gray-400 rounded-xl p-4 relative font-apercuMedium ${selectedPerk === 'discounts' ? 'bg-gray-500' : 'bg-gray-400'}`} onClick={() => setSelectedPerk('discounts')}>
                            <div className='h-full flex items-center justify-center relative z-10'>
                                <div className='absolute w-10 h-10 left-5 top-2 bg-orange-500 rounded-full -z-10'></div>
                                <div className='relative z-10'>
                                    <MdOutlineDiscount className='mb-2 w-12 h-12 -ml-6' />
                                    <p className='text-center text-lg mt-8'>Early Access & Discounts</p>
                                </div>
                            </div>
                        </button>
                        <button className={`h-40 hover:bg-gray-500 bg-gray-400 rounded-xl p-4 relative font-apercuMedium ${selectedPerk === 'events' ? 'bg-gray-500' : 'bg-gray-400'}`} onClick={() => setSelectedPerk('events')}>
                            <div className='h-full flex items-center justify-center relative z-10'>
                                <div className='absolute w-10 h-10 left-5 top-2 bg-orange-500 rounded-full -z-10'></div>
                                <div className='relative z-10'>
                                    <GiWorld className='mb-2 w-12 h-12 -ml-12' />
                                    <p className='text-center text-lg mt-8'>Real-world Events</p>
                                </div>
                            </div>
                        </button>
                        <button className={`h-40 hover:bg-gray-500 bg-gray-400 rounded-xl p-4 relative font-apercuMedium ${selectedPerk === 'investment' ? 'bg-gray-500' : 'bg-gray-400'}`} onClick={() => setSelectedPerk('investment')}>
                            <div className='h-full flex items-center justify-center relative z-10'>
                                <div className='absolute w-10 h-10 left-5 top-2 bg-orange-500 rounded-full -z-10'></div>
                                <div className='relative z-10'>
                                    <Image src="/investment.png" alt="investment Icon" width={50} height={50} className='mb-2 -ml-14' />
                                    <p className='text-center text-lg mt-8'>Investment Value</p>
                                </div>
                            </div>
                        </button>
                        <button className={`h-40 hover:bg-gray-500 bg-gray-400 rounded-xl p-4 relative font-apercuMedium ${selectedPerk === 'collectibles' ? 'bg-gray-500' : 'bg-gray-400'}`} onClick={() => setSelectedPerk('collectibles')}>
                            <div className='h-full flex items-center justify-center relative z-10'>
                                <div className='absolute w-10 h-10 left-5 top-2 bg-orange-500 rounded-full -z-10'></div>
                                <div className='relative z-10'>
                                    <Image src="/collectible.png" alt=" collectible Icon" width={50} height={50} className='mb-2 -ml-6' />
                                    <p className='text-center text-lg mt-8'>Surprise Collectible Drops</p>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className='lg:col-span-1 bg-gray-400 rounded-xl p-4 flex flex-col font-apercuMedium'>
                        <div className='flex flex-row justify-center space-x-5'>
                            <Image src={perks[selectedPerk].image1} alt="3280 bub" width={200} height={200} style={{width:'auto', height: "auto" }} className='rounded-xl object-cover' />
                            <Image src={perks[selectedPerk].image2} alt="7428 bub" width={150} height={150} style={{width:'auto', height: "auto" }} className='rounded-xl object-cover ' />
                        </div>
                        <div className='p-4'>
                            <h2 className='text-xl font-semibold mb-2'>{perks[selectedPerk].title}</h2>
                            <p className='text-sm'>{perks[selectedPerk].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="min-h-[500px] flex justify-center items-center bg-orange-700">
            <div className="container flex flex-col sm:flex-row items-center justify-center gap-6 mr-10">
                <div className="sm:w-1/2 mb-10">
                    <div className="flex flex-row space-x-4 mb-8">
                        <Image src="/tigersUnited.png" alt="endangered tigers logo" width={200} height={200} className="text-white" />
                        <Image src="/multipleSclerosis.png" alt="multiple sclerosis logo" width={200} height={200} className="text-white" />
                        <Image src="/woundedwarriors.png" alt="wounded warriors logo" width={100} height={100} className="text-white" />
                    </div>
                    <h1 className="text-5xl text-white font-apercuBold">Mindful Minting</h1>
                    <p className="text-lg text-white mt-4">Rare digital collectibles making the world a better place.</p>
                    <Link href="/impact" className="primary-btn mt-10 text-xl font-apercuRegular text-center inline-block py-3 px-6 bg-blackLight text-white rounded-lg " > 
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

