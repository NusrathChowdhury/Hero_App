"use client";

import { useContext } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { ApppContext } from "@/context/AppContext";

const InstallationPage = () => {
  const { installedApps, setInstalledApps } = useContext(ApppContext);

  const handleUninstall = (id: number, title: string) => {
    setInstalledApps((prev) => prev.filter((app) => app.id !== id));

    toast.success(`${title} uninstalled successfully!`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-white px-5 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">
          <span className="inline-flex rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
            📱 App Library
          </span>

          <h1 className="mt-5 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Your Installed Apps
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Manage all the applications you have installed.
          </p>
        </div>

        {/* No apps */}
        {installedApps.length === 0 ? (
          <div className="mx-auto mt-16 max-w-xl rounded-3xl border border-purple-100 bg-white p-10 text-center shadow-lg">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-purple-100 text-5xl">
              📱
            </div>

            <h2 className="mt-7 text-2xl font-bold text-gray-900">
              No apps installed yet
            </h2>

            <p className="mt-3 text-gray-500">
              Explore our apps and install your favorite ones.
            </p>

            <Link
              href="/apps"
              className="btn btn-primary mt-7 rounded-full px-8"
            >
              Explore Apps
            </Link>
          </div>
        ) : (
          <>
            {/* App count */}
            <div className="mb-7 mt-16 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Installed Applications
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Manage your installed apps.
                </p>
              </div>

              <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-bold text-purple-700">
                {installedApps.length}{" "}
                {installedApps.length === 1 ? "App" : "Apps"}
              </span>
            </div>

            {/* Apps */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {installedApps.map((app) => (
                <div
                  key={app.id}
                  className="rounded-3xl border border-purple-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="h-20 w-20 rounded-2xl object-cover"
                    />

                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                      Installed
                    </span>
                  </div>

                  <h3 className="mt-5 truncate text-lg font-bold text-gray-900">
                    {app.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {app.companyName}
                  </p>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-yellow-400">★</span>

                    <span className="font-bold text-gray-900">
                      {app.ratingAvg}
                    </span>

                    <span className="text-sm text-gray-400">
                      ({app.reviews})
                    </span>
                  </div>

                  <div className="mt-4 flex justify-between rounded-2xl bg-purple-50 p-4">
                    <div>
                      <p className="text-xs text-gray-500">Downloads</p>
                      <p className="mt-1 font-bold text-gray-900">
                        {app.downloads}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Size</p>
                      <p className="mt-1 font-bold text-gray-900">
                        {app.size} MB
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex gap-2">
                    <Link
                      href={`/apps/${app.id}`}
                      className="btn btn-primary flex-1 rounded-full"
                    >
                      View Details
                    </Link>

                    <button
                      onClick={() =>
                        handleUninstall(app.id, app.title)
                      }
                      className="rounded-full border border-red-200 px-4 py-2 font-semibold text-red-500 hover:bg-red-50"
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default InstallationPage;
