"use client";
import { Button, Spinner } from "@/components/ui";
import VehicleItem from "./VehicleItem";
import useVehicles from "./hooks/useVehicles";
import { Vehicle, VehiclesResponse } from "@/types";
import { extractFilters } from "./hooks/useVehicleFilters";

type SearchParams = { [key: string]: string | string[] | undefined };

export const VehicleGrid = ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const filters = extractFilters(searchParams);

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useVehicles(filters);

  if (isLoading)
    return (
      <div className="flex justify-center my-16 w-full max-w-[500px] mx-auto">
        <Spinner />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No vehicles found</div>;

  // Flatten all pages into one array
  const allVehicles: Vehicle[] = data.pages.flatMap(
    (page: VehiclesResponse) => page.results
  );
  const totalCount = data.pages[0]?.count || 0;

  return (
    <>
      <p className="text-lg mb-2 md:mb-4 font-light">
        {totalCount} Vehicles found
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {allVehicles.map((vehicle: Vehicle) => (
          <VehicleItem key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>

      {hasNextPage && (
        <div className="flex justify-center my-16 w-full max-w-[500px] mx-auto">
          <Button
            size="lg"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage
              ? "Loading..."
              : `LOAD ${totalCount - allVehicles.length} MORE`}
          </Button>
        </div>
      )}
    </>
  );
};
