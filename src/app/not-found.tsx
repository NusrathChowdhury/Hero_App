import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-white px-6">
      <div className="text-center">

        {/* 404 Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-4 py-2">
          <span className="text-sm font-semibold tracking-wide text-purple-600">
            404 ERROR
          </span>
        </div>

        {/* 404 */}
        <h1 className="text-7xl font-black tracking-tight text-gray-900 sm:text-8xl">
          404
        </h1>

        <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
          Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
          Sorry, the page you're looking for doesn't exist or may have been
          moved somewhere else.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-700 hover:shadow-xl"
        >
          Go Home
        </Link>

      </div>
    </main>
  );
};

export default NotFound;