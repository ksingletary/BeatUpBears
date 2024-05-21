import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="background-image w-screen h-auto relative flex flex-row-reverse items-center bg-blue-200 min-h-[750px]">
        <Image src="/redpanda.png" width={700} height={700} alt="red panda pic" className="" priority/>
        <div className=" ml-44 text-white text-center space-y-6">
          <h1 className="text-7xl font-apercuBold">
            Beat Up But Okay
          </h1>
          <p className="text-2xl font-apercuRegular mb-4">
            Vitalizing the web3 space by leveraging blockchain to build a global community 
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="#" className="text-blue-500">
              <Image src="/opensea.svg" alt="opensea logo" width={100} height={100} className="w-8 h-8" />
            </Link>
            <Link href="#" className=" text-indigo-700">
              <Image src="/solana-sol-logo.svg" alt="solana logo" width={100} height={100} className="w-8 h-8"/>
            </Link>
            <Link href="#">
              <Image src="/ME.png" alt="magic eden logo" width={100} height={100} className="w-8 h-8"/>
            </Link>
          </div>
        </div>
      </div>
      <div className="min-h-[850px] flex justify-center items-center bg-blackLight p-4 z-10">
        <div className="container ml-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Image section */}
            <div className="flex justify-center items-center relative">
              <div className="bg-white absolute rounded-lg w-[590px] h-[669px] flex flex-col items-center justify-center">
                <Image
                  src="/4519.png"
                  width={560}
                  height={620}
                  alt="BUB 4519"
                  className="relative z-10 rounded-md mb-2"
                />
                <div className="relative z-10 flex items-center font-apercuRegular justify-between w-full px-4 mb-2">
                  <div className="text-lef mt-2">
                    <h1 className="text-black text-3xl">#4519</h1>
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
              <p className="text-xl font-apercuMedium">AN ONLINE CULTURE SHIFT</p>
              <h1 className="text-5xl font-apercuBold">Beat Up Bears</h1>
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
                  src="/7125.png"
                  alt="7125 bub"
                  width={400}
                  height={400}
                  className="rounded-xl"
                />
              </div>
              <div className="relative w-full h-[365px]">
                <Image
                  src="/2633.png"
                  alt="2633 bub"
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
                  src="/7002.png"
                  alt="7002 bub"
                  width={825}
                  height={825}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link href="/media">
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
            <h1 className="text-white text-6xl font-bold mb-4">Media</h1>
            <p className="text-white text-2xl">Art forms of our bubs!</p>
          </div>
        </div>
      </Link>
    </>
  );
}
