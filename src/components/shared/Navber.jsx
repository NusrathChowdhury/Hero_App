import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png';
import Link from 'next/link';

const Navber = () => {
  return (
    <div className="bg-white border-b border-purple-100">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
          <h2 className="text-xl font-bold text-purple-700">
            Logo
          </h2>
        </div>

        <ul className="flex items-center gap-8 text-sm font-medium text-gray-600">
          <li>
            <Link
              href="/"
              className="hover:text-purple-700 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/apps"
              className="hover:text-purple-700 transition-colors"
            >
              Apps
            </Link>
          </li>
          <li>
            <Link
              href="/installation"
              className="hover:text-purple-700 transition-colors"
            >
              Installation
            </Link>
          </li>
        </ul>

        <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors shadow-sm">
          Contribute
        </button>

      </nav>
    </div>
  );
};

export default Navber;