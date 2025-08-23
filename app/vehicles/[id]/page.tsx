import { BackButton } from "@/components/ui";
import VehicleDetail from "@/features/vehicles/vehicle/VehicleDetail";
import { Metadata } from "next";

type VehicleSinglePageProps = {
  params: Promise<{
    id: string;
  }>;
};

// Dinamički metadata za vehicle detail stranice
export async function generateMetadata({
  params,
}: VehicleSinglePageProps): Promise<Metadata> {
  const { id } = await params;

  try {
    // Import vehicles data directly instead of API call
    const vehiclesData = await import("@/data/vechicles.json");

    // Find the specific vehicle by ID
    const vehicle = vehiclesData.default.results.find(
      (v: { id: string }) => v.id === id
    );

    if (!vehicle) {
      return {
        title: "Vehicle Not Found",
        description: "The requested vehicle could not be found.",
      };
    }

    return {
      title: `${vehicle.make} ${vehicle.model}`,
      description: `${vehicle.make} ${vehicle.model} ${
        vehicle.seriesName || ""
      } - ${vehicle.mileage ? `${vehicle.mileage}km` : ""} - ${
        vehicle.prices[0]?.value
          ? `€${vehicle.prices[0].value.toLocaleString()}`
          : ""
      }`,
    };
  } catch (error) {
    return {
      title: "Vehicle Not Found",
      description: "The requested vehicle could not be found.",
    };
  }
}

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
