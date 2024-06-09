"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function AccountSettings() {
  const { data: session } = useSession();

  return (
    <div className="flex h-screen ml-44">
      <aside className="w-1/4 p-8 bg-blackLighter text-white fixed h-full">
        <h1 className="text-4xl font-semibold">Account</h1>
        <p className="mt-4">Manage your linked social media accounts, wallets, and notification settings through the account page.</p>
      </aside>
      <main className="ml-1/4 w-3/4 overflow-y-auto p-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold bg-black p-4">BASIC INFO</h2>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">LINKED ACCOUNTS</h3>
            <p className="mt-2 text-gray-400">Your linked social media & email accounts.</p>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                <span>Discord</span>
                <button className="text-green-500">CONNECT</button>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                <span>Twitter</span>
                <input
                  type="text"
                  value={session?.user?.name || ""}
                  className="bg-transparent border-none outline-none text-gray-400"
                  disabled
                />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                <span>Email</span>
                <input type="text" className="bg-transparent border-none outline-none text-gray-400" />
                <button className="text-gray-500">SAVE</button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold bg-black p-4">WALLET MANAGER</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <span>Solana Wallets</span>
              <button className="text-green-500">SOL WALLET</button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <span>Bitcoin Wallets</span>
              <button className="text-green-500">BTC WALLET</button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <span>Ethereum Wallets</span>
              <button className="text-green-500">ETH WALLET</button>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold bg-black p-4">NOTIFICATION SETTINGS</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <span>Account</span>
              <input type="checkbox" className="form-toggle" defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <span>Grails and Badges</span>
              <input type="checkbox" className="form-toggle" defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <span>Tickets</span>
              <input type="checkbox" className="form-toggle" defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <span>Raffles</span>
              <input type="checkbox" className="form-toggle" defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <span>Decimals</span>
              <input type="checkbox" className="form-toggle" defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <span>Streaks</span>
              <input type="checkbox" className="form-toggle" defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <span>Turn off Notifications</span>
              <input type="checkbox" className="form-toggle" />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold bg-black p-4">SIGN OUT</h2>
          <div className="mt-4">
            <button
              className="w-full p-4 bg-red-600 text-white rounded-lg"
              onClick={() => signOut()}
            >
              SIGN OUT
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}