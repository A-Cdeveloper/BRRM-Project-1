"use client";

import { Button } from "@/components/ui";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="flex flex-col flex-1 max-w-screen-2xl mx-auto z-10 w-full py-4 px-2 2xl:px-0">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        {/* Error Icon */}
        <div className="mb-8">
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

        {/* Error Message */}
        <div className="max-w-md mb-8">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Something Went Wrong
          </h2>

          {/* Error Details (only in development) */}
          {process.env.NODE_ENV === "development" && (
            <details className="mt-4 text-left">
              <summary className="cursor-pointer text-red-400 hover:text-red-300">
                Error Details
              </summary>
              <div className="mt-2 p-3 bg-gray-800 rounded text-sm text-gray-300 font-mono">
                <p>
                  <strong>Message:</strong> {error.message}
                </p>
                {error.digest && (
                  <p>
                    <strong>Digest:</strong> {error.digest}
                  </p>
                )}
                <p>
                  <strong>Stack:</strong>
                </p>
                <pre className="whitespace-pre-wrap text-xs mt-1">
                  {error.stack}
                </pre>
              </div>
            </details>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={reset}>Try Again</Button>
        </div>
      </div>
    </main>
  );
}
