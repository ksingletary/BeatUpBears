"use client";

import { useSession, signOut } from "next-auth/react";
import { IoReturnDownBack } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

export default function AccountSettings() {
  const { data: session } = useSession();

  return (
    <div className="flex min-h-screen flex-row bg-blackDark">
      {/* Fixed Left Section */}
      <div className="h-full w-2/5 space-y-10 bg-blackDark p-10 mt-16 ml-32 z-0">
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
      <div className="ml-auto w-3/5 space-y-10 mt-28 z-10  ">
          {/* Basic Info */}
          <div className="rounded-lg bg-blackDark p-4">
            <h2 className="font-apercuBold text-2xl text-white">BASIC INFO</h2>
            <div className="mt-4 space-y-4">
              <div className="text-white">LINKED ACCOUNTS</div>
              <div className="text-gray-400">
                Your linked social media & email accounts.
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">DISCORD</span>
                  <button className="rounded border border-green-500 px-4 py-2 text-green-500">
                    CONNECT
                  </button>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">TWITTER</span>
                  <input
                    className="w-1/2 rounded border border-gray-600 bg-gray-700 p-2 text-white"
                    type="text"
                    value="@ Objektiv_"
                    readOnly
                  />
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">EMAIL</span>
                  <input
                    className="w-1/2 rounded border border-gray-600 bg-gray-700 p-2 text-white"
                    type="email"
                  />
                  <button className="rounded border border-gray-600 px-4 py-2 text-gray-400">
                    SAVE
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Newsletter</span>
                  <input type="checkbox" className="toggle-checkbox" />
                </div>
              </div>
            </div>
          </div>

          {/* Wallet Manager */}
          <div className="rounded-lg bg-gray-800 p-4">
            <h2 className="font-apercuBold text-2xl text-white">
              WALLET MANAGER
            </h2>
            <div className="mt-4 space-y-4">
              <div className="text-white">SOLANA WALLETS</div>
              <div className="text-gray-400">
                Easily manage your Solana wallet connections by linking or
                unlinking here
              </div>
              <button className="rounded border border-green-500 px-4 py-2 text-green-500">
                SOL WALLET
              </button>

              <div className="text-white">BITCOIN WALLETS</div>
              <div className="text-gray-400">
                Easily manage your Bitcoin wallet connections by linking or
                unlinking here
              </div>
              <button className="rounded border border-green-500 px-4 py-2 text-green-500">
                BTC WALLET
              </button>

              <div className="text-white">ETHEREUM WALLETS</div>
              <div className="text-gray-400">
                Easily manage your Ethereum wallet connections by linking or
                unlinking here
              </div>
              <button className="rounded border border-green-500 px-4 py-2 text-green-500">
                ETH WALLET
              </button>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="rounded-lg bg-gray-800 p-4">
            <h2 className="font-apercuBold text-2xl text-white">
              NOTIFICATION SETTINGS
            </h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white">Account</span>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white">Grails and Badges</span>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white">Tickets</span>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white">Raffles</span>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white">Decimals</span>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white">Streaks</span>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white">Turn off Notifications</span>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
            </div>
          </div>

          {/* Sign Out */}
          <div className="rounded-lg bg-gray-800 p-4">
            <button
              onClick={() => signOut()}
              className="w-full hover:bg-black rounded border border-gray-600 px-4 py-2 text-white"
            >
              SIGN OUT
            </button>
          </div>
        </div>
      </div>
  );
}
