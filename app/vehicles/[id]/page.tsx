import { BackButton } from "@/components/ui";
import VehicleDetail from "@/features/vehicles/vehicle/VehicleDetail";

type VehicleSinglePageProps = {
  params: Promise<{
    id: string;
  }>;
};

const VehicleSinglePage = async ({ params }: VehicleSinglePageProps) => {
  const { id } = await params;

  return (
    <main className="flex flex-col flex-1  max-w-screen-2xl mx-auto z-10 w-full py-4 px-2 2xl:px-0 relative">
      <BackButton />
      <VehicleDetail vehicleId={id} />
    </main>
  );
};

export default VehicleSinglePage;
