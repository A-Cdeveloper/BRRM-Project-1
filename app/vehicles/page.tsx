import { BackButton } from "@/components/ui";
import VehiclesFilterBox from "@/features/vehicles/VehiclesFilterBox";
import { VehicleGrid } from "@/features/vehicles/VehicleGrid";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const VehiclesPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const params = await searchParams;

  return (
    <main className="flex flex-col flex-1  max-w-screen-2xl mx-auto z-10 w-full py-4 px-2 2xl:px-0 relative">
      <BackButton />
      <h1>Inventory</h1>
      <VehiclesFilterBox searchParams={params} />

      <VehicleGrid searchParams={params} />
    </main>
  );
};

export default VehiclesPage;
