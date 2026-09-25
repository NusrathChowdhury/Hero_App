const GlobalLoading = () => {
  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-white px-6">
      <div className="flex flex-col items-center text-center">
        
        {/* Loader */}
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-4 border-purple-100" />

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-purple-600" />
        </div>

        {/* Text */}
        <h2 className="mt-6 text-lg font-bold text-gray-900">
          Loading Apps
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Please wait while we load everything for you...
        </p>

      </div>
    </main>
  );
};

export default GlobalLoading;