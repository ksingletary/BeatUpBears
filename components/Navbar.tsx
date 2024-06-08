"use client";

import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Image from "next/image";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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

  const handleMouseLeave = (e: React.MouseEvent) => {
    const target = e.relatedTarget as HTMLElement | null;
    if (target && typeof target.closest === 'function' && !target.closest('.navbar') && !target.closest('.expanded-navbar')) {
      setIsAnimating(true);
      setTimeout(() => {
        setOpen(false);
        setIsAnimating(false);
      }, 200);
    }
  };

  return (
      <nav className="navbar bg-blackLighter fixed top-0 left-0 h-full w-36 p-4 bg-opacity-95 z-10">
        <div className="flex flex-col items-start h-full relative">
          <div className="text-white font-bold">
            <Link href="/">
              <Image
                src="/logobub.png"
                alt="bublogo"
                width={200}
                height={200}
                priority
                className="absolute"
              />
            </Link>
            <div className="flex ml-10 font-CaeciliaSemi text-3xl h-[62vh] w-8 justify-center overflow-hidden">
              <div>
                <h1 className="mt-80 self-center whitespace-nowrap -rotate-90">Beat Up Bears®</h1>
              </div>
            </div>
          </div>

          <button onClick={handleToggle} className="mt-auto text-white w-full">
            <FaBarsStaggered className="w-8 h-8 ml-8" />
          </button>

          {(open || isAnimating) && (
            <div
              onMouseLeave={handleMouseLeave}
              className={`expanded-navbar fixed left-36 outline outline-black top-0 h-full w-[calc(33.000%-60px)] p-0 bg-blackLight font-CaeciliaSemi text-white bg-opacity-75 backdrop-blur-md ${
                open && !isAnimating ? "navbar-open" : "navbar-close"
              }`}
            >
              <div className="flex flex-col justify-center h-full text-lg -space-y-5 -mt-20 ">
                <Link href="/" className="hover:bg-orange-500 block px-4 py-8 w-full text-right">
                  HOME
                </Link>
                <Link href="/team" className="hover:bg-orange-500 block px-4 py-8 w-full text-right">
                  THE TEAM
                </Link>
                <Link href="/collectibles" className="hover:bg-orange-500 block px-4 py-8 w-full text-right">
                  COLLECTIBLES
                </Link>
                <Link href="/media" className="hover:bg-orange-500 block px-4 py-8 w-full text-right">
                  MEDIA
                </Link>
                <Link href="/footprint" className="hover:bg-orange-500 block px-4 py-8 w-full text-right">
                  FOOOTPRINT
                </Link>
                <Link href="#" className="hover:bg-orange-500 block px-4 py-8 w-full text-right group">
                  SHOP <span className="text-orange-600 group-hover:text-white">&#40;COMING SOON!&#41;</span>
                </Link>
              </div>
              <div className="flex flex-col -mt-20 -space-y-5">
                <Link href="/login" className="hover:bg-orange-500 block px-4 py-8 w-full text-right">
                  LOGIN
                </Link>
                <Link href="/account/create" className="hover:bg-orange-500 block px-4 py-8 w-full text-right">
                  CREATE ACCOUNT
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
  );
}