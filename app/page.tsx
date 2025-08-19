import Navbar from "@/components/layout/Navbar";
import Partners from "@/features/partners/Partners";

export default function Home() {
  return (
    <>
      <main
        className="flex flex-col flex-1 items-center
    justify-start text-center px-6 pt-8 pb-24 lg:pt-16 lg:pb-8 max-w-screen-2xl mx-auto z-10 relative
    w-full overflow-hidden"
      >
        <h1 className="mb-2">
          Risus quis at{" "}
          <span className="text-primary block md:inline">nisi nunc</span>
        </h1>
        <p className="max-w-2xl mb-8 text-gray-300">
          Eget libero venenatis integer senectus tincidunt adipiscing enim elit.
          Non netus enim id lacinia morbi id ornare malesuada amet.
        </p>

        <Navbar />

        <Partners />
      </main>
    </>
  );
}
