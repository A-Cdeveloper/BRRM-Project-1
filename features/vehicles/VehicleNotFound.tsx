export const VehicleNotFound = () => (
  <div
    className="flex flex-col items-center justify-center min-h-[60vh] text-center"
    role="alert"
    aria-labelledby="not-found-title"
  >
    {/* Icon */}
    <div className="mb-8" aria-hidden="true">
      <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
        <svg
          className="w-10 h-10 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
      </div>
      <div className="w-24 h-1 bg-accent mx-auto"></div>
    </div>

    {/* Message */}
    <div className="max-w-md mb-8">
      <h2
        id="not-found-title"
        className="text-3xl font-semibold text-white mb-4"
      >
        No Vehicles Found
      </h2>
    </div>
  </div>
);
