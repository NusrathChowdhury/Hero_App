import Link from "next/link";
import { getApps } from "@/lib/apps";
import InstallAppButton from "@/components/Apps/InstallAppButton";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const AppDetailsPage = async ({ params }: Props) => {
  const { id } = await params;

  const apps = await getApps();

  const app = apps.find((item) => item.id.toString() === id);

  if (!app) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-white px-6">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-purple-100 text-3xl">
            😕
          </div>

          <h1 className="mt-6 text-3xl font-bold text-gray-900">
            App Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            Sorry, we couldn't find the app you're looking for.
          </p>

          <Link
            href="/apps"
            className="btn btn-primary mt-6 rounded-full px-6"
          >
            ← Back to Apps
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50/70 via-white to-white">
      {/* Hero */}
      <section className="px-5 pb-16 pt-10 sm:px-8 lg:px-10 lg:pt-14">
        <div className="mx-auto max-w-6xl">
          {/* Back Button */}
          <Link
            href="/apps"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-purple-600"
          >
            <span>←</span>
            Back to Apps
          </Link>

          {/* Main App Card */}
          <div className="overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-xl shadow-purple-100/40">
            <div className="p-6 sm:p-10 lg:p-12">

              {/* App Information */}
              <div className="flex flex-col gap-8 md:flex-row md:items-center">
                
                {/* App Image */}
                <div className="shrink-0">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="h-32 w-32 rounded-3xl object-cover shadow-lg shadow-purple-100 sm:h-36 sm:w-36"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="mb-3">
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-600">
                      Featured App
                    </span>
                  </div>

                  <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    {app.title}
                  </h1>

                  <p className="mt-2 text-base text-gray-500">
                    Developed by{" "}
                    <span className="font-semibold text-gray-700">
                      {app.companyName}
                    </span>
                  </p>

                  {/* Rating */}
                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="rating rating-sm">
                        <span className="text-lg text-yellow-400">★</span>
                      </div>

                      <span className="font-bold text-gray-900">
                        {app.ratingAvg}
                      </span>
                    </div>

                    <span className="h-4 w-px bg-gray-200" />

                    <span className="text-sm text-gray-500">
                      {app.reviews} reviews
                    </span>

                    <span className="h-4 w-px bg-gray-200" />

                    <span className="text-sm text-gray-500">
                      {app.downloads} downloads
                    </span>
                  </div>
                </div>

                {/* Action */}
                <div className="shrink-0">
                  <InstallAppButton app={app}/>                </div>
              </div>

              <div className="divider my-8" />

              {/* Description */}
              <div className="max-w-4xl">
                <h2 className="text-2xl font-bold text-gray-900">
                  About this app
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  {app.description}
                </p>
              </div>

              {/* App Information */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  App Information
                </h2>

                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  
                  {/* Downloads */}
                  <div className="rounded-2xl border border-purple-100 bg-purple-50/70 p-5">
                    <p className="text-sm font-medium text-gray-500">
                      Downloads
                    </p>

                    <p className="mt-2 text-2xl font-bold text-purple-700">
                      {app.downloads}
                    </p>
                  </div>

                  {/* Size */}
                  <div className="rounded-2xl border border-purple-100 bg-purple-50/70 p-5">
                    <p className="text-sm font-medium text-gray-500">
                      App Size
                    </p>

                    <p className="mt-2 text-2xl font-bold text-purple-700">
                      {app.size} MB
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="rounded-2xl border border-purple-100 bg-purple-50/70 p-5">
                    <p className="text-sm font-medium text-gray-500">
                      Rating
                    </p>

                    <p className="mt-2 text-2xl font-bold text-purple-700">
                      {app.ratingAvg} / 5
                    </p>
                  </div>
                </div>
              </div>

              {/* Ratings Breakdown */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  Ratings & Reviews
                </h2>

                <div className="mt-5 rounded-2xl border border-base-200 bg-base-100 p-6">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                    
                    {/* Overall Rating */}
                    <div className="text-center sm:w-40">
                      <p className="text-5xl font-extrabold text-gray-900">
                        {app.ratingAvg}
                      </p>

                      <div className="mt-2 text-xl tracking-wide text-yellow-400">
                        ★★★★★
                      </div>

                      <p className="mt-2 text-sm text-gray-500">
                        {app.reviews} reviews
                      </p>
                    </div>

                    {/* Rating Bars */}
                    <div className="flex-1 space-y-3">
                      {app.ratings.map((rating) => (
                        <div
                          key={rating.name}
                          className="flex items-center gap-3"
                        >
                          <span className="w-10 text-sm font-medium text-gray-600">
                            {rating.name}
                          </span>

                          <progress
                            className="progress progress-primary h-2 flex-1"
                            value={rating.count}
                            max={100}
                          />

                          <span className="w-12 text-right text-sm text-gray-500">
                            {rating.count}%
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AppDetailsPage;