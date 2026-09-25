import AppCard from "@/components/shared/AppCard";
import { getApps } from "@/lib/apps";

const AppsPage = async () => {
  const data = await getApps();

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50/70 via-white to-white py-16 sm:py-20">
      
      <section className="mx-auto max-w-3xl px-5 text-center">
        <span className="inline-flex items-center rounded-full border border-purple-200 bg-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-700">
          ✨ Explore Our Collection
        </span>

        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Explore All Apps
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
          Discover amazing apps designed to make your everyday life easier,
          smarter, and more productive.
        </p>
      </section>

      <section className="mx-auto mt-14 w-full max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            All Applications
          </h2>

          <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
            {data.length} Apps
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default AppsPage;