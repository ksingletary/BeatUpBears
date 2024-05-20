"use client";

import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import Image from "next/image";

export function Navbar() {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-blackLight fixed top-0 left-0 h-full w-36 p-4">
      <div className="flex flex-col items-start h-full relative">
        <div className="text-white font-bold">
          <Link href="/">
            <Image src="/logobub.png" alt="bublogo" width={200} height={200} className="" />
          </Link>
        </div>
       
        <button onClick={handleToggle} className="mt-auto text-white">
          <FaBarsStaggered className="w-8 h-8 ml-6" />
        </button>
       
        {open && (
          <div className="absolute opacity-65 bottom-16 left-0 ml-32 top-0 h-full w-48 p-4 bg-blackLight text-white">
            <p>Additional Content</p>
          </div>
        )}
      </div>
    </nav>
  );
}