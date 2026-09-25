import AppCard from "../shared/AppCard";
import { getApps } from "@/lib/apps";

const TrendingApp = async () => {
  const data = await getApps();

  return (
    <section className="my-20 w-full px-5 sm:px-8 lg:px-10">
      
      {/* Section Header */}
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-600">
          Explore Popular Apps
        </span>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Trending Apps
        </h2>

        <p className="mt-3 text-base leading-7 text-gray-500">
          Discover the most popular and trending apps people are using right now.
        </p>
      </div>

      {/* App Grid */}
      <div className="mx-auto mt-12 grid w-full max-w-[1400px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.slice(0, 8).map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

    </section>
  );
};

export default TrendingApp;