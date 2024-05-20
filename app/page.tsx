import Image from "next/image";
import Link from "next/link";
import { SiOpensea} from "react-icons/si";
import { TbBrandCoinbase } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <div className="w-screen h-auto relative flex flex-row-reverse items-center bg-blue-200 min-h-[750px]">
        <Image src="/redpanda.png" width={700} height={700} alt="red panda pic" className=""/>
        <div className=" ml-44 text-blackLight text-center space-y-6">
          <h1 className="text-7xl font-apercuBold">
            Beat Up But Okay
          </h1>
          <p className="text-2xl font-apercuRegular mb-4">
            Vitalizing the web3 space by leveraging blockchain to build a global community 
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="#" className="text-blue-500">
              <SiOpensea className="w-8 h-8" />
            </Link>
            <Link href="#" className=" text-indigo-700">
              <Image src="/solana-sol-logo.svg" alt="solana logo" width={100} height={100} className="w-8 h-8"/>
            </Link>
            <Link href="#">
              <TbBrandCoinbase className="w-8 h-8 text-blue-700" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
