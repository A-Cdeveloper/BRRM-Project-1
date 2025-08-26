import { Navbar } from "@/components/layout";
import Partners from "@/features/partners/Partners";

export default function Home() {
  return (
    <>
      <main
        className="flex flex-col flex-1 items-center
    justify-start text-center px-6 pt-8 pb-24 lg:pt-16 lg:pb-8 max-w-screen-2xl mx-auto z-10 relative
    w-full overflow-hidden"
        role="main"
        aria-labelledby="home-title"
      >
        <h1 id="home-title" className="mb-2">
          Risus quis at{" "}
          <span className="text-primary block md:inline">nisi nunc</span>
        </h1>
        <p className="max-w-2xl mb-8 text-gray-300">
          Eget libero venenatis integer senectus tincidunt adipiscing enim elit.
          Non netus enim id lacinia morbi id ornare malesuada amet.
        </p>

        <Navbar />
        <div
          className="absolute md:relative bottom-1 md:bottom-0 md:mt-14  left-0 right-0 z-10 h-[100px] overflow-x-auto overflow-y-hidden scrollbar-hide flex items-center justify-center"
          role="region"
          aria-label="Featured partners"
        >
          <Partners limit={5} />
        </div>
      </main>
    </>
  );
}
