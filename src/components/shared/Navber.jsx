import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";

const Navber = () => {
  return (
    <header className="border-b border-purple-100 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Logo"
            className="h-10 w-10 object-contain"
          />

          <h2 className="text-xl font-bold text-purple-700">
            Logo
          </h2>
        </Link>

        <ul className="flex items-center gap-8 text-sm font-medium text-gray-600">
          <li>
            <Link
              href="/"
              className="transition-colors hover:text-purple-700"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/apps"
              className="transition-colors hover:text-purple-700"
            >
              Apps
            </Link>
          </li>

          <li>
            <Link
              href="/apps/installation"
              className="transition-colors hover:text-purple-700"
            >
              Installation
            </Link>
          </li>
        </ul>

        <button
          className="rounded-lg bg-purple-600 px-5 py-2.5 font-medium text-white shadow-sm transition hover:bg-purple-700"
        >
          Contribute
        </button>

      </nav>
    </header>
  );
};

export default Navber;
