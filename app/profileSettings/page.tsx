import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
        <div className="min-h-[750px] bg-blackLight flex flex-col items-center ">
            <h1 className="text-5xl font-apercuBold text-white mt-36 ml-28">Something went wrong... </h1>
            <Image src='/HoneyTeddyBear.png' width={600} height={600} alt="beat up bear" className="ml-28 -mt-28"/>
        </div>
    </>
  )
}

export default page