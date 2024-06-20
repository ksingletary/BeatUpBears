import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const cards = [
    { name: 'Bonnie.G', title: 'Visual Designer', source: "/3233.png" },
    { name: 'Charlee_', title: 'Web3 BUBO!', source: "/6922.png" },
    { name: 'A.red', title: 'Product Manager', source: "/4272.png" },
    { name: 'Sam__wyte', title: 'BUB Enthusiast', source: "/994.png" },
    { name: 'KTra1n', title: 'Founder', source: "/2855.png" },
    { name: 'TayloredBlck', title: 'UX Designer', source: "/5642.png" },
  ];

  return (
    <>
      <div className="background-image w-screen h-auto relative flex flex-col-reverse md:flex-row-reverse items-center bg-blue-200 min-h-[750px]">
        <div className="relative w-full md:w-1/2 lg:w-1/3 flex justify-center md:justify-end ">
          <Image src="/redpanda.png" width={700} height={700} alt="red panda pic" priority className="w-[630px] h-[630px]" />
        </div>
      <div className="mt-10 md:mt-0 md:w-1/2 lg:w-2/3 text-white space-y-6 lg:pl-40 lg:flex lg:flex-col lg:items-center lg:justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-apercuBold">
          Beat Up But Okay
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-apercuRegular mb-4 lg:text-center">
          Vitalizing the web3 space by leveraging blockchain to build a global community
        </p>
        <div className="flex justify-center space-x-6">
          <Link href="#" className="text-blue-500">
            <Image src="/opensea.svg" alt="opensea logo" width={100} height={100} className="w-8 h-8" />
          </Link>
          <Link href="#" className="text-indigo-700">
            <Image src="/solana-sol-logo.svg" alt="solana logo" width={100} height={100} className="w-8 h-8" />
          </Link>
          <Link href="#">
            <Image src="/ME.png" alt="magic eden logo" width={100} height={100} className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </div>
      <div className="min-h-[850px] flex justify-center items-center bg-blackLight  z-10">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Image section */}
            <div className="flex justify-center items-center relative">
              <div className="bg-white lg:absolute lg:left-0 rounded-lg w-[630px] h-[710px] flex flex-col items-center justify-center">
                <Image
                  src="/4519.png"
                  width={550}
                  height={550}
                  alt="BUB 4519"
                  style={{width:'auto', height: "auto" }}
                  priority
                  className="z-10 rounded-md mb-2"
                />
                <div className="relative z-10 flex items-center font-apercuRegular justify-between w-full px-4 mb-2">
                  <div className="text-lef mt-2">
                    <h1 className="text-black text-3xl">#4519</h1>
                    <p className="text-gray-500 text-lg">Beat Up Bears</p>
                  </div>
                  <div className="text-right text-white bg-black rounded-md w-10 h-5 mb-4">
                      <p className="text-center text-xs mt-1">SOL</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Text content section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0 ml-40 w-full text-white">
              <h3 className="text-xl font-apercuMedium">AN ONLINE CULTURE SHIFT</h3>
              <h1 className="text-5xl font-apercuBold">Beat Up Bears</h1>
              <p className="font-apercuRegular text-lg">
                Beat Up Bears consists of 8,888 unique digital collectibles, symbolizing digital cultural evolution and proudly demonstrating resilience in adversity. 
                Launched in September 2022, it set new records for digital collectibles, generating $18 million in sales within just 24 hours.
              </p>
              <p className="text-lg font-apercuRegular">
                The impactful artwork and central motto, &quot;Beat up but okay,&quot; resonated with digital collectors, catalyzing the rapid growth of a global community dedicated to making a positive difference.
              </p>
              <Link href="#" className="primary-btn mt-6 text-xl font-apercuRegular text-center">
                <p className="mb-10">BROWSE OUR BUBS</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='min-h-[950px] bg-blackLight flex flex-col items-center justify-center'> 
        <div className="container ">  
          <div className="grid grid-cols-1 sm:grid-cols-[400px_auto] gap-10 -mt-24">
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
      <div className="min-h-[850px] flex justify-center items-center bg-blackLight p-4 z-10">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-28">
            {/* Text content section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0 mr-16 text-white">
              <Link href="/footprint" className="text-xl font-apercuMedium hover:text-orange-500">OUR CHARITY EFFORTS</Link>
              <h1 className="text-5xl font-apercuBold">$41K in 48 Hrs for Wounded Warriors in Afghanistan and Iraq</h1>
              <p className="font-apercuRegular text-lg">
                Beat Up Bears raised an impressive $41K in just 48 hours to support Wounded Warriors. Our incredible achievement showcases the organization&apos;s dedication and the community&apos;s generosity in making a meaningful impact on the lives of wounded veterans.
              </p>
            </div>
            {/* Image section */}
            <div className="flex justify-center items-center relative">
              <div className="bg-white absolute rounded-lg w-[630px] h-[710px] flex flex-col items-center justify-center">
                <Image
                  src="/5802.png"
                  width={550}
                  height={550}
                  alt="BUB 1198"
                  style={{width:'auto', height: "auto" }}
                  className="relative w-auto h-auto z-10 rounded-md mb-2"
                />
                <div className="relative z-10 flex items-center font-apercuRegular justify-between w-full px-4 mb-2">
                  <div className="text-lef mt-2">
                    <h1 className="text-black text-3xl">Wounded Warriors</h1>
                    <p className="text-gray-500 text-lg">Beat Up Bears Digital Collectible</p>
                  </div>
                  <div className="text-right text-white bg-black rounded-md w-10 h-5 mb-4">
                      <p className="text-center text-xs mt-1">SOL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[650px] flex flex-col justify-center items-center bg-blackLight p-4 z-10">
        <div className="text-center mb-8 mt-10 ml-20">
          <h1 className="text-white text-5xl font-bold mb-4">Add A Fellow BUB</h1>
          <p className="text-white text-lg">You can find fellow bubs on X and connect with the community.</p>
        </div>
        <div className="relative w-full max-w-4xl h-[550px] mt-16 mr-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className="absolute w-[260px] h-[320px] bg-gray-600 bg-opacity-50 backdrop-blur-lg border border-gray-600 rounded-lg shadow-lg"
              style={{ left: `${index * 175}px`, top: `${index * 20}px`, zIndex: index }}
            >
              <div className="flex flex-col items-center pb-10 pt-10">
                <Image width={96} height={96} className="w-24 h-24 mb-3 rounded-full shadow-lg" src={card.source} alt={`${card.name} bub`} />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{card.name}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{card.title}</span>
                <div className="flex mt-4 md:mt-6">
                  <div className="inline-flex items-center px-4 py-2 cursor-pointer text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Follow</div>
                  <div className="py-2 px-4 ml-2 text-sm font-medium cursor-pointer text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href="/account/create" className="-mt-14 mb-10">
          <div className="primary-btn text-xl font-apercuRegular text-center inline-block py-3 px-6 bg-blackLight text-white rounded-lg -mt-10">
            Login With X
          </div>
        </Link>
      </div>
      <div className="min-h-[500px] flex justify-center items-center bg-orange-700">
        <div className="container flex flex-col sm:flex-row items-center justify-center gap-6 ">
          <div className="sm:w-1/2 mb-10">
            <div className="flex flex-row space-x-4 mb-8">
              <Image src="/tigersUnited.png" alt="endangered tigers logo" width={100} height={100} style={{width:'auto', height: "auto" }} className="text-white" />
              <Image src="/multipleSclerosis.png" alt="multiple sclerosis logo" width={100} height={100} style={{width:'auto', height: "auto" }} className="text-white" />
              <Image src="/woundedwarriors.png" alt="wounded warriors logo" width={100} height={100} style={{width:'auto', height: "auto" }} className="text-white" />
            </div>
            <h1 className="text-5xl text-white font-apercuBold">The Future of Web3</h1>
            <p className="text-lg text-white mt-4">Owning a Beat Up Bear isn&apos;t just about getting a unique NFT. It&apos;s about being part of a community that&apos;s making a real impact.</p>
            <Link href="/footprint" className="primary-btn mt-10 text-xl font-apercuRegular text-center inline-block py-3 px-6 bg-blackLight text-white rounded-lg " > 
                View More
            </Link>
          </div>
          <div className="sm:w-1/2 flex justify-center">
            <Image src="/HoneyTeddyBear.png" alt="honey teddy bear" width={600} height={600} className="ml-36" />
          </div>
        </div>
      </div>
      <div className="min-h-[600px] flex justify-center items-center bg-blackLight">
          <div className="container flex flex-col">
            <h1 className="text-5xl text-white font-apercuRegular ml-10">
              Beat Up Bears has shown that Web3 can be a powerful tool for mobilization and empowerment, nurturing a global community that radiates positivity and solidarity.
            </h1>
            <div className="mt-10 ml-10">
              <h3 className="text-orange-500 font-apercuRegular text-2xl">Eleanor Greene</h3>
              <p className="text-white font-apercuRegular text-2xl">CEO OF GreenLeaf Technologies</p>
            </div>
            
          </div>
      </div>
    </>
  );
}
