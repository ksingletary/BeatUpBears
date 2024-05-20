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
    </>
  );
}
