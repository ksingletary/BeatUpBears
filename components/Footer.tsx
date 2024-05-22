import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        <Image src="/BUB3.png" alt="BUB logo" width={150} height={150} className="mb-4" />
        <div className="text-center">
          <p className="text-lg font-semibold">Beat Up Bears</p>
          <p className="text-sm">Making a Positive Impact in Web3</p>
        </div>
        <div className="flex space-x-4">
          <Link href="/" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-white'>
              <FaTwitter className="h-6 w-6" />
          </Link>
          <Link href="/" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-white'>
              <FaFacebook className="h-6 w-6" />
          </Link>
          <Link href="/" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-white'>
              <FaInstagram className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}