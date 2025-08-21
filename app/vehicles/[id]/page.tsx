import BackButton from "@/components/ui/BackButton";
import VehicleDetail from "@/features/vehicles/vehicle/VehicleDetail";

const VechicleSinglePage = () => {
  return (
    <main className="flex flex-col flex-1  max-w-screen-2xl mx-auto z-10 w-full py-4 px-2 2xl:px-0 relative">
      <BackButton />
      <VehicleDetail />
    </main>
  );
};

export default VechicleSinglePage;
