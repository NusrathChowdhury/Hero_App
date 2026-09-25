const Loading = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50/70 via-white to-white py-16 sm:py-20">
      {/* Header Skeleton */}
      <section className="mx-auto max-w-3xl px-5 text-center">
        <div className="skeleton mx-auto h-8 w-52 rounded-full" />

        <div className="skeleton mx-auto mt-5 h-11 w-72 rounded-lg" />

        <div className="skeleton mx-auto mt-4 h-5 w-full max-w-xl rounded-lg" />
        <div className="skeleton mx-auto mt-2 h-5 w-3/4 max-w-lg rounded-lg" />
      </section>

      {/* Apps Skeleton */}
      <section className="mx-auto mt-14 w-full max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="mb-6 flex items-center justify-between">
          <div className="skeleton h-7 w-40 rounded-lg" />
          <div className="skeleton h-8 w-20 rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="card border border-base-200 bg-base-100 shadow-sm"
            >
              <div className="px-5 pt-5">
                <div className="skeleton h-20 w-20 rounded-2xl" />
              </div>

              <div className="card-body p-5">
                <div className="skeleton h-6 w-3/4 rounded-lg" />

                <div className="skeleton mt-2 h-4 w-1/2 rounded-lg" />

                <div className="mt-3 flex gap-2">
                  <div className="skeleton h-4 w-12 rounded-lg" />
                  <div className="skeleton h-4 w-16 rounded-lg" />
                </div>

                <div className="mt-3 flex justify-between">
                  <div className="skeleton h-4 w-24 rounded-lg" />
                  <div className="skeleton h-4 w-12 rounded-lg" />
                </div>

                <div className="skeleton mt-4 h-9 w-full rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Loading;