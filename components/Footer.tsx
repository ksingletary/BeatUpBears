import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaDiscord, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blackLight border-t border-white text-white py-4">
      <div className="container mx-auto w-full flex justify-between items-center">
        <div className="flex space-x-4 ml-10">
          <Link href="https://twitter.com/yourprofile" passHref>
            <FaTwitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
          </Link>
          <Link href="https://discord.com/yourprofile" passHref>
            <FaDiscord className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
          </Link>
          <Link href="https://instagram.com/yourprofile" passHref>
            <FaInstagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
          </Link>
        </div>
        <div className="text-center mr-10">
          <p className="text-lg font-semibold">Beat Up Bears</p>
          <p className="text-sm">COPYRIGHT © 2024 -- BUBRRR HOLDINGS, INC. DBA BEAT UP BEARS -- ALL RIGHTS RESERVED</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="/privacy" passHref>
              <span className="text-gray-400 hover:text-white cursor-pointer">Privacy</span>
            </Link>
            <Link href="/terms" passHref>
              <span className="text-gray-400 hover:text-white cursor-pointer">Terms of Use</span>
            </Link>
            <Link href="/license" passHref>
              <span className="text-gray-400 hover:text-white cursor-pointer">License</span>
            </Link>
          </div>
        </div>
        <div className="flex-shrink-0 -mr-20">
          <Image src="/BUB3.png" alt="BUB logo" width={100} height={100} />
        </div>
      </div>
    </footer>
  );
}