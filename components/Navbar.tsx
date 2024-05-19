// components/Navbar.tsx
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-gray-800 fixed top-0 left-0 h-full w-64 p-4">
      <div className="flex flex-col items-start space-y-40">
        <div className="text-white font-bold">
          <Link href="/">
            <div>MyApp</div>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/about">
            <div className="text-white">About</div>
          </Link>
          <Link href="/contact">
            <div className="text-white">Contact</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}