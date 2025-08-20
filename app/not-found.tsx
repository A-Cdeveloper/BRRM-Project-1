import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col flex-1 max-w-screen-2xl mx-auto z-10 w-full py-4 px-2 2xl:px-0">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Error Message */}
        <div className="max-w-md mb-8">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Page Not Found
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="px-4 py-1 bg-primary text-secondary font-bold uppercase  hover:bg-primary/90 transition-colors duration-200"
          >
            Go Home
          </Link>

          <Link
            href="/contact"
            className="px-4 py-1 border border-white text-white font-bold uppercase  hover:border-primary hover:text-primary transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
