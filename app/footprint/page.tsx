import React from 'react'
import Image from 'next/image'
import { IoClose } from "react-icons/io5";
import Link from 'next/link';

export default function Footprint() {
  return (
    <>
        <div className="background-image-footprint w-screen h-auto relative items-center min-h-[750px]">
            <div className="text-white mr-28 w-2/3 space-y-6">
                <h1 className="text-7xl text-left font-apercuBold">
                    <span className='text-orange-600'>Tigers</span> United
                </h1>
                <p className="text-2xl w-1/2 text-left font-apercuRegular mb-4">
                    We may be Bears, but we care about all our animal brethren.
                </p>
                <Image src="/tigersunited.png" alt='tigers united' width={200} height={200} style={{width: 'auto', height: 'auto'}} className='ml-28' priority />
            </div>
      </div>
      <div className='min-h-[450px] flex flex-col justify-center bg-blackLight'>
        <div className='container text-center font-apercuMedium space-y-8 ml-44'>
            <h3 className='text-2xl text-white'><span className='text-orange-600'>$43,250 RAISED</span> & COUNTING</h3>
            <h1 className='text-white text-4xl'>Footprint Amplified</h1>
            <p className='text-white text-lg'>We work with prominent individuals and organizations to spread hope through the fusion of art and code.</p>
            <div className="flex flex-row justify-center space-x-4 mb-8">
                <Image src="/tigersUnited.png" alt="endangered tigers logo" width={100} height={100} style={{width:'auto', height: "auto" }} className="text-white" />
                <Image src="/multipleSclerosis.png" alt="multiple sclerosis logo" width={100} height={100} style={{width:'auto', height: "auto" }} className="text-white" />
                <Image src="/woundedwarriors.png" alt="wounded warriors logo" width={100} height={100} style={{width:'auto', height: "auto" }} className="text-white" />
            </div>
        </div>
      </div>
      <div className="relative min-h-[650px]">
            <video 
              className="absolute inset-0 w-full h-full object-cover" 
              src="/tigersvid.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
            />
            <div className="absolute w-2/3 font-apercuBold z-10 space-y-5 flex flex-col items-center justify-center h-full text-center ml-72">
                <h1 className="text-white text-xl font-apercuMedium mb-4">TIGERS UNITED X BEAT UP BEARS</h1>
                <p className="text-orange-600 text-5xl">Tigers</p>
                <p className='text-white text-xl w-2/3 '>Tigers United and BUB signed digital collectible raises $18,000 USD for helping endangered tiger species.</p>
          </div>
        </div>
        <div className="min-h-[850px] flex justify-center items-center bg-blackLight p-4 z-10">
            <div className="container ml-40">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Image section */}
                    <div className="flex justify-center items-center relative">
                        <div className="bg-white absolute rounded-lg w-[590px] h-[669px] flex flex-col items-center justify-center">
                            <Image
                            src="/2159.png"
                            width={520}
                            height={520}
                            style={{width:'auto', height: "auto" }}
                            alt="BUB 2159"
                            className="relative z-10 rounded-md mb-2 w-auto h-auto"
                            />
                            <div className="relative z-10 flex items-center font-apercuRegular justify-between w-full px-4 mb-2">
                                <div className="text-lef mt-2">
                                    <h1 className="text-black text-3xl">#2159</h1>
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
                        <p className="text-xl font-apercuMedium">Claws Out for Conservation</p>
                        <h1 className="text-5xl font-apercuBold">Bruised But Big-Hearted</h1>
                        <p className="font-apercuRegular text-lg">
                        Even though they may be the toughest brawlers of the forest, the Beat Up Bears have a soft spot for their fellow endangered species. 
                        That's why they've partnered with Tigers United, a leading conservation organization dedicated to protecting majestic tigers around the world. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="min-h-[500px] flex justify-center items-center bg-orange-700">
            <div className="container flex flex-col sm:flex-row items-center justify-center gap-6 mr-10">
                <div className="sm:w-1/2 mb-10">
                    <div className="flex flex-row space-x-4 mb-8">
                        <Image src="/multipleSclerosis.png" alt="multiple sclerosis logo" width={100} height={100} style={{width:'auto', height: "auto" }} className="text-white" />
                    </div>
                    <h1 className="text-5xl text-white font-apercuBold">Building Connections, Battling MS</h1>
                    <p className="text-lg text-white mt-4">Bruised in battle, but their spirit roars. Beat Up Bears support MS research. Join the fight! </p>
                    
                </div>
                <div className="sm:w-1/2 flex justify-center">
                    <Image src="/4252.png" alt="4252 bear" width={600} height={600} className='mb-10' />
                </div>
            </div>
        </div>
        <div className="min-h-[850px] flex justify-center items-center bg-blackLight p-4 z-10 -mt-10 ">
            <div className="container mx-auto ml-40">
                <div className="grid grid-cols-2 gap-6">
                    {/* Text content section */}
                    <div className="flex flex-col justify-center gap-6 text-white">
                        <p className="text-xl font-apercuMedium">Bears Fight MS</p>
                        <h1 className="text-5xl font-apercuBold">MS: Raising awareness for a cure</h1>
                        <p className="font-apercuRegular text-xl">
                            Every season, our NFT project embarks on a collaborative journey with the Multiple Sclerosis Society, employing a diverse blend of auctions, open edition mints, and impactful social media campaigns to amplify awareness and champion the cause of those affected by multiple sclerosis.
                        </p>
                    </div>
                    {/* First Image with downloads */}
                    <div className="relative">
                        <Image
                            src="/12.png"
                            width={615}
                            height={530}
                            alt="12 bub"
                            className="rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className='min-h-[350px] bg-blackLighter'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className='flex flex-row gap-12 justify-center mt-3'>
                        <Image src="/logobub.png" alt="logo bub" width={300} height={300} />
                        <IoClose className='text-7xl text-orange-600 mt-28'/>
                        <Image src="/MSsociety.png" alt="MS society logo" width={300} height={300} />
                    </div>
                </div>
            </div>
        </div>
        <div className='min-h-[950px] bg-blackLight'>
            <div className='container mx-auto space-y-36'>
                <div className='grid grid-cols-1'>
                    <div className='flex flex-row gap-9 justify-center mt-16 ml-28'>
                        <Image src="/4542.png" alt='4542 bub' width={410} height={410} className='rounded-xl' />
                        <Image src="/4680.png" alt='4542 bub' width={410} height={410} className='rounded-xl' />
                        <Image src="/5913.png" alt='4542 bub' width={410} height={410} className='rounded-xl' />
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl text-white font-apercuMedium ml-10">
                        We have seen first-hand how quickly and passionately the Beat Up Bears community responds, and the positive impact they can have.
                    </h1>
                    <div className="mt-6 ml-10">
                        <h3 className="text-orange-500 font-apercuRegular text-2xl">John Doe</h3>
                        <p className="text-white font-apercuRegular text-2xl">CEO OF "Insert Company Here"</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="background-image-wounded relative min-h-[650px]">
            <div className="absolute w-2/3 z-10 space-y-8 flex flex-col items-center justify-center mb-44 h-full text-center ml-28">
                <h1 className="text-white text-xl font-apercuRegular mb-4">Warrior Rehabilitation</h1>
                <p className="text-5xl text-white font-apercuMedium">Wounded Warrior Project for Service Members</p>
                <p className='text-white text-xl w-2/3 font-apercuRegular '>Provisions and vital emergency relief for warriors and families</p>
            </div>
        </div>
        <div className="min-h-[850px] flex justify-center items-center bg-blackLight p-4 z-10">
            <div className="container ml-40">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Image section */}
                    <div className="flex justify-center items-center relative">
                        <div className="bg-white absolute rounded-lg w-[630px] h-[710px] flex flex-col items-center justify-center">
                            <Image
                                src="/7237.png"
                                width={550}
                                height={550}
                                alt="BUB 7237"
                                style={{ width: 'auto', height: "auto" }}
                                className="relative w-auto h-auto z-10 rounded-md mb-2"
                            />
                            <div className="relative z-10 flex items-center font-apercuRegular justify-between w-full px-4 mb-2">
                                <div className="text-left mt-2">
                                    <h1 className="text-black text-3xl">Wounded Warriors</h1>
                                    <p className="text-gray-500 text-lg">Beat Up Bears Digital Collectible</p>
                                </div>
                                <div className="text-right text-white bg-black rounded-md w-10 h-5 mb-4">
                                    <p className="text-center text-xs mt-1">SOL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Text content section */}
                    <div className="flex flex-col justify-center gap-6 sm:pt-0 ml-16 text-white">
                        <h3 className="text-xl font-apercuMedium hover:text-orange-500">REHABILITTATIVE CARE</h3>
                        <h1 className="text-5xl font-apercuBold">$41K in 48 Hrs for Wounded Warriors in "Insert Country Here"</h1>
                        <p className="font-apercuRegular text-lg">
                            In early 2024, a catastrophic earthquake hit Turkey and Syria, affecting over 15 million people. 
                            Our community united and raised $23,000 USD in just two days, through an open edition mint and a digital collectible auction of a Beat Up Bear in UNHCR relief gear.
                        </p>
                    </div>
                </div>
            </div>
        </div>   
        <div className='min-h-[420px] bg-blackLight'>
            <div className='container mx-auto flex flex-col justify-center' style={{ minHeight: '400px' }}>
                <div className='mb-28'>
                    <h1 className="text-5xl text-white font-apercuMedium ml-10">
                        Beat Up Bears' vision to spread messages of hope in support of meaningful causes inspires us all.
                    </h1>
                    <div className="mt-6 ml-10">
                        <h3 className="text-orange-500 font-apercuRegular text-2xl">John Doe</h3>
                        <p className="text-white font-apercuRegular text-2xl">CEO OF "Insert Company Here"</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='min-h-[650px] bg-blackLight -mt-12'>
            <div className='container mx-auto justify-center'>
                <div className='grid grid-cols-1'>
                    <div className='flex flex-row gap-14 justify-center ml-40'>
                        <Image src="/3897.png" alt='3897 bub' width={615} height={615} className='rounded-xl' />
                        <Image src="/3768.png" alt='3768 bub' width={615} height={615} className='rounded-xl' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
