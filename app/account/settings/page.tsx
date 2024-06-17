"use client";

import { useSession, signOut } from "next-auth/react";
import { IoReturnDownBack } from "react-icons/io5";
import { RiLink } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

export default function AccountSettings() {
  const { data: session } = useSession();

  return (
    <div className="flex min-h-screen flex-row bg-blackDark">
      {/* Fixed Left Section */}
      <div className="z-0 ml-32 mt-16 h-32 w-1/3 space-y-10 bg-blackDark p-10 fixed">
        <div>
          <h1 className="font-apercuBold text-4xl text-white">Account</h1>
          <Link href="/account">
            <IoReturnDownBack className="h-10 w-10 text-white hover:text-orange-600" />
          </Link>
        </div>
        <p className="font-apercuRegular text-xl text-gray-400">
          Manage your linked social media accounts, wallets, and notification
          settings through the account page.
        </p>
      </div>

      {/* Scrollable Right Section */}
      <div className="z-10 ml-auto mt-52 w-[60%] space-y-10 font-apercuBold">
        {/* Basic Info */}
        <div className="rounded-lg bg-blackDark ">
          <h2 className=" bg-blackDarker py-4 px-6 text-2xl text-white">BASIC INFO</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 pt-8">
            {/* Left Side */}
            <div className=" space-y-2">
              <div className="text-white">LINKED ACCOUNTS</div>
              <div className="text-gray-400">Your linked social media & email accounts.</div>
            </div>

            {/* Right Side */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex flex-col space-y-2">
                  <span className="text-gray-400 text-xs">DISCORD</span>
                  <input readOnly placeholder="Unconnected" className="bg-blackLighter px-2 rounded-md border border-gray-500 w-64 h-10 cursor-default focus:outline-none pointer-events-none"/>
                </div>
                <button className="primary-btn w-24 h-10 text-sm ml-8 flex items-center justify-center mt-8 ">
                  CONNECT
                </button>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col space-y-2">
                  <span className="text-gray-400 text-xs">TWITTER</span>
                  <input value={session?.user?.name || ''} readOnly className="bg-blackLighter text-white rounded-md border border-gray-500 w-64 h-10 cursor-default focus:outline-none pointer-events-none"/>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col space-y-2">
                  <span className="text-gray-400 text-xs">EMAIL</span>
                  <input className="bg-blackLighter px-2 rounded-md border border-gray-500 w-64 h-10 focus:outline-none text-white"/>
                </div>
                <button className="primary-btn w-24 h-10 text-sm ml-8 flex items-center justify-center mt-8 ">
                  SAVE
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Newsletter</span>
                <label className="inline-flex items-center cursor-pointer mr-20">
                  <input type="checkbox" value="" className="sr-only peer"/>
                  <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 
                  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px]
                   after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600">
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Wallet Manager */}
        <div className="rounded-lg p-4 font-apercuBold">
          <h2 className="font-apercuBold bg-blackDarker py-4 px-6 text-2xl text-white">WALLET MANAGER</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between text-white">
              <div className="space-y-4">
                <h1>SOLANA WALLETS</h1>
                <p className="text-gray-400 w-5/6">
                  Easily manage your Solana wallet connections by linking or unlinking here
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <h1 className="text-sm">No wallet linked</h1>
                <button className="primary-btn flex items-center w-44">
                  <RiLink className="mr-4" /> SOL WALLET 
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-white">
              <div className="space-y-4">
                <h1>BITCOIN WALLETS</h1>
                <p className="text-gray-400 w-5/6">
                  Easily manage your Bitcoin wallet connections by linking or unlinking here
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <h1 className="text-sm">No wallet linked</h1>
                <button className="flex items-center primary-btn w-44">
                  <RiLink className="mr-4" /> BTC WALLET 
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-white">
              <div className="space-y-4">
                <h1>ETHEREUM WALLETS</h1>
                <p className="text-gray-400 w-5/6">
                  Easily manage your Ethereum wallet connections by linking or unlinking here
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <h1 className="text-sm">No wallet linked</h1>
                <button className="flex items-center primary-btn w-44">
                  <RiLink className="mr-4" /> ETH WALLET 
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className=" bg-blackDark ">
          <h2 className=" bg-blackDarker py-4 px-6 text-2xl text-white">NOTIFICATION SETTINGS</h2>
          <div className="mt-2 grid grid-cols-2 gap-4 pt-8">
            {/* Left Side */}
            <div className=" space-y-2">
              <h1 className="text-gray-400 mb-4">Update your notification settings for a more personalized experience.</h1>
            </div>

            {/* Right Side */}
            <div className="space-y-6 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-white ml-8">Account</span>
                <label className="inline-flex items-center cursor-pointer mr-12">
                  <input type="checkbox" value="" className="sr-only peer"/>
                  <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 
                  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px]
                   after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600">
                  </div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white ml-8">Prizes</span>
                <label className="inline-flex items-center cursor-pointer mr-12">
                  <input type="checkbox" value="" className="sr-only peer"/>
                  <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 
                  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px]
                   after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600">
                  </div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white ml-8">Raffles</span>
                <label className="inline-flex items-center cursor-pointer mr-12">
                  <input type="checkbox" value="" className="sr-only peer"/>
                  <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 
                  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px]
                   after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600">
                  </div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white ml-8">Turn Off Notifications</span>
                <label className="inline-flex items-center cursor-pointer mr-12">
                  <input type="checkbox" value="" className="sr-only peer"/>
                  <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 
                  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px]
                   after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600">
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Sign Out */}
        <div className="flex flex-col p-4 space-y-6">
          <h2 className=" bg-blackDarker py-4 px-6 text-2xl text-white">SIGN OUT</h2>
          <div className=" flex w-full">
            <h3 className="text-white">Goodbye</h3>
            <button
              onClick={() => signOut()}
              className=" primary-btn w-44 ml-72"
            >
              SIGN OUT
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
