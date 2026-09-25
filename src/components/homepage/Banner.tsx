import Image from 'next/image';
import React from 'react';
import bannerimg from '@/assets/hero.png';

const Banner = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 px-6 py-16 max-w-xl mx-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 text-center">

        <h2 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
          We Build
          <br />
          <span className="text-purple-600">Productive</span> apps
        </h2>

        <p className="max-w-2xl text-gray-500 text-base md:text-lg leading-7">
          Build smarter, more productive apps that make everyday tasks easier, faster, and more efficient.

        </p>

        <div className="flex items-center gap-4">
          <button className="rounded-xl bg-purple-600 px-6 py-3 font-medium text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700 hover:-translate-y-0.5">
            Google Play
          </button>

          <button className="rounded-xl border border-purple-200 bg-white px-6 py-3 font-medium text-purple-700 shadow-sm transition hover:bg-purple-50 hover:-translate-y-0.5">
            App Store
          </button>
        </div>

        <Image
          src={bannerimg}
          alt="Banner"
          className="mt-6 h-auto w-[350px] drop-shadow-xl"
        />

      </div>
    </div>
  );
};

export default Banner;
