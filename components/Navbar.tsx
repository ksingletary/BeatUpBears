"use client";

import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import Image from "next/image";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); //indicated if the closing animation is in progress

  const handleToggle = () => {
    if (open) {
      setIsAnimating(true);
      setTimeout(() => {
        setOpen(false);
        setIsAnimating(false);
      }, 200);
    } else {
      setOpen(true);
    }
  };
  
  // this is called when the mouse leaves the expanded navbar.
  // checks if mouse has left both the original navbar and the expanded navbar areas by using e.relatedTarget and closest method.
  const handleMouseLeave = (e: React.MouseEvent) => {
    const target = e.relatedTarget as HTMLElement;
    if (target && !target.closest('.navbar') && !target.closest('.expanded-navbar')) {
      setIsAnimating(true);
      setTimeout(() => {
        setOpen(false);
        setIsAnimating(false);
      }, 200); 
    }
  };

  return (
    <nav className="navbar bg-blackLight fixed top-0 left-0 h-full w-36 p-4">
      <div className="flex flex-col items-start h-full relative">
        <div className="text-white font-bold">
          <Link href="/">
            <Image
              src="/logobub.png"
              alt="bublogo"
              width={200}
              height={200}
              className=""
            />
          </Link>
        </div>

        <button onClick={handleToggle} className="mt-auto text-white">
          <FaBarsStaggered className="w-8 h-8 ml-6" />
        </button>

        {(open || isAnimating) && (
          <div
            onMouseLeave={handleMouseLeave}
            className={`expanded-navbar fixed left-36 outline outline-black top-0 h-full w-[calc(33.000%-60px)] p-0 bg-blackLight font-CaeciliaSemi text-white bg-opacity-75 backdrop-blur-md ${
              open && !isAnimating ? "navbar-open" : "navbar-close"
            }`}
          >
            <div className="flex flex-col justify-center h-full text-2xl -space-y-5 -mt-14">
              <Link
                href="/about"
                className="hover:bg-orange-500 block px-4 py-8 w-full text-right"
              >
                About
              </Link>
              <Link
                href="/"
                className="hover:bg-orange-500 block px-4 py-8 w-full text-right"
              >
                The Team
              </Link>
              <Link
                href="/"
                className="hover:bg-orange-500 block px-4 py-8 w-full text-right"
              >
                Collectibles
              </Link>
              <Link
                href="/"
                className="hover:bg-orange-500 block px-4 py-8 w-full text-right"
              >
                Media
              </Link>
              <Link
                href="/"
                className="hover:bg-orange-500 block px-4 py-8 w-full text-right"
              >
                Impact
              </Link>
              <Link
                href="/"
                className="hover:bg-orange-500 block px-4 py-8 w-full text-right"
              >
                Shop
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}