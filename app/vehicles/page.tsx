import BackButton from "@/components/ui/BackButton";
import Button from "@/components/ui/Button";
import { VehicleGrid } from "@/features/vechiles/VehicleGrid";

const VehiclesPage = () => {
  return (
    <main className="flex flex-col flex-1  max-w-screen-2xl mx-auto z-10 w-full py-4 px-2 2xl:px-0 relative">
      <BackButton />
      <h1>Inventory</h1>
      <p className="text-lg mb-4 font-light">42 Vehicles found</p>

      <Button
        variant="outlined"
        className="relative sm:absolute sm:top-24 right-0 sm:right-2 2xl:right-0 z-10 mb-4 sm:my-0"
      >
        FILTERS
      </Button>

      <VehicleGrid />
    </main>
  );
};

export default VehiclesPage;
