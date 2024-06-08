import Image from "next/image";
import { GiBearFace, GiCoins, GiWorld } from "react-icons/gi";
import { PiLineVerticalBold, PiSticker } from "react-icons/pi";
import { SiWeb3Dotjs } from "react-icons/si";
import { IoShirtSharp } from "react-icons/io5";

export default function CollectibleOffers() {
    return (
        <>
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
        </>
    )
}