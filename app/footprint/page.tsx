import React from 'react'
import Image from 'next/image'

const Footprint = () => {
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
                <Image src="/tigersunited.png" alt='tigers united' width={200} height={200} style={{width: 'auto', height: 'auto'}} className='ml-28' />
            </div>
      </div>
      <div className='min-h-[450px] flex flex-col justify-center bg-blackLight'>
        <div className='container text-center font-apercuMedium space-y-8 ml-44'>
            <h3 className='text-2xl text-white'><span className='text-orange-600'>$43,250 RAISED</span> & COUNTING</h3>
            <h1 className='text-white text-4xl'>Footpring Amplified</h1>
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
                    <Image src="/4252.png" alt="4252 bear" width={600} height={600} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Footprint