"use client";

<<<<<<< HEAD
import { Button } from "@/components/ui";
=======
import { useEffect } from "react";
>>>>>>> 7a5dd0589858f9e04a021da061c703f1abe3e811

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
<<<<<<< HEAD
=======
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

>>>>>>> 7a5dd0589858f9e04a021da061c703f1abe3e811
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
