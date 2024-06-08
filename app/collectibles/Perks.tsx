"use client";

import Image from "next/image"
import { useState } from "react";
import { MdOutlineDiscount } from "react-icons/md";
import { GiWorld } from "react-icons/gi";


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

export default function Perks() {
    const [selectedPerk, setSelectedPerk] = useState<PerkType>('companion')

    return (
        <>
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
        </>
    )
}