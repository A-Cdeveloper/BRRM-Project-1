import { BackButton } from "@/components/ui";
import VehicleDetail from "@/features/vehicles/vehicle/VehicleDetail";
import { Metadata } from "next";

// Keep the same shape you used before
type VehicleSinglePageProps = {
  params: Promise<{
    id: string;
  }>;
};

// Dynamic metadata for vehicle detail pages sourced from API
export async function generateMetadata({
  params,
}: VehicleSinglePageProps): Promise<Metadata> {
  const { id } = await params;

  try {
    const res = await fetch(`/api/vehicles/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return {
        title: "Vehicle Not Found",
        description: "The requested vehicle could not be found.",
      };
    }

    const vehicle = (await res.json()) as {
      make?: string;
      model?: string;
      seriesName?: string | null;
      mileage?: number | null;
      prices?: Array<{ value: number }>;
    };

    const make = vehicle.make ?? "Vehicle";
    const model = vehicle.model ?? "";
    const series = vehicle.seriesName ?? "";
    const mileage = vehicle.mileage ? `${vehicle.mileage}km` : "";
    const priceVal = vehicle.prices?.[0]?.value;
    const price =
      typeof priceVal === "number" ? `€${priceVal.toLocaleString()}` : "";

    return {
      title: `${make} ${model}`.trim(),
      description: `${make} ${model} ${series ? series : ""} - ${mileage} ${
        price ? `- ${price}` : ""
      }`.trim(),
    };
  } catch {
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
