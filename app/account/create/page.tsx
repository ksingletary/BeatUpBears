"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";

export default function CreateAccount () {
    return (
        <>  
            <div className="min-h-[650px] flex">
                <div className=" w-1/3 bg-blackDark">
                    <div className="flex flex-col justify-center gap-6 text-white ml-10 mt-24">
                        <h1 className="text-3xl font-apercuBold ml-32">CREATE ACCOUNT</h1>
                        <HiOutlineBarsArrowDown className="ml-40 w-12 h-12" />
                        
                    </div>
                </div>
                <div className=" w-3/4 bg-orange-700">
                    <div className="grid grid-cols-2 gap-3">
                        {/* Text content section */}
                        <div className="flex flex-col justify-center gap-6 text-white ml-10">
                            <h1 className="text-5xl font-apercuBold">X / TWITTER SIGN UP</h1>
                            <p className="text-lg font-apercuRegular">For the full BUB experience, you&apos;ll need two things to create an account.</p>
                            <ol className="list-decimal list-inside font-apercuRegular">
                                <li>An X(Twitter) account</li>
                                <li>A wallet on Ethereum, Solana or Bitcoin (optional)</li>
                            </ol>
                            <Link href="/account" className="primary-btn font-CaeciliaBold w-48">
                                SIGN UP WITH X
                            </Link>
                        </div>
                        {/*  Image section */}
                        <div className="flex justify-center items-center">
                            <div className="relative w-[700px] h-[700px]">
                                <Image
                                    src="/1205.png"
                                    fill
                                    sizes="auto"
                                    style={{objectFit:"cover"}}
                                    alt="1205 bub"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}