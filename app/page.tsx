import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main
      className="flex flex-col flex-1 items-center
    justify-center text-center px-6 max-w-screen-2xl mx-auto z-10"
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

      <div className="flex justify-center items-center space-x-10 mt-12 opacity-80">
        <img src="assets/maserati.png" alt="Maserati" className="h-8" />
        <img src="assets/ford.png" alt="Ford" className="h-8" />
        <img src="assets/bmw.png" alt="BMW" className="h-8" />
        <img src="assets/audi.png" alt="Audi" className="h-8" />
        <img src="assets/kia.png" alt="Kia" className="h-8" />
      </div>
    </main>
    // <main className="flex-1 max-w-screen-2xl mx-auto w-full">
    //   <h1>Risus quis at nisi nunc</h1>
    //   <h2>Eget libero venenatis</h2>
    // </main>
  );
}
