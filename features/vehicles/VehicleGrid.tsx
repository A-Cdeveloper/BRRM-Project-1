"use client";
import { Spinner, Button } from "@/components/ui";
import dynamic from "next/dynamic";
import useVehicles from "./hooks/useVehicles";
import { Vehicle, VehiclesResponse } from "@/types";
import { extractFilters } from "./hooks/useVehicleFilters";
import { useMemo, Suspense } from "react";
import { VehicleNotFound } from "./VehicleNotFound";

// Dinamički import za VehicleItem
const VehicleItem = dynamic(() => import("./VehicleItem"), {
  loading: () => <div className="bg-secondary p-2 h-[222px] animate-pulse" />,
  ssr: false,
});

type SearchParams = { [key: string]: string | string[] | undefined };

const VehicleGrid = ({ searchParams }: { searchParams: SearchParams }) => {
  const filters = useMemo(() => extractFilters(searchParams), [searchParams]);

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useVehicles(filters);

  // Flatten all pages into one array - must be before early returns
  const allVehicles: Vehicle[] = useMemo(
    () => data?.pages.flatMap((page: VehiclesResponse) => page.results) || [],
    [data?.pages]
  );
  const totalCount = data?.pages[0]?.count || 0;

  if (isLoading)
    return (
      <div className="flex justify-center my-16 w-full max-w-[500px] mx-auto">
        <Spinner />
      </div>
    );

  if (error || !data) return <VehicleNotFound />;

  // Check if no vehicles found after filtering
  if (allVehicles.length === 0) {
    return (
      <div className="text-center py-24">
        <h2 className="text-3xl my-8">No founded vehicles</h2>
        <Button onClick={() => fetchNextPage()}>Try again</Button>
      </div>
    );
  }

  return (
    <>
      <p className="text-lg mb-2 md:mb-4 font-light">
        {totalCount} Vehicles found
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {allVehicles.map((vehicle: Vehicle) => (
          <Suspense
            key={vehicle.id}
            fallback={
              <div className="bg-secondary p-2 h-[222px] animate-pulse" />
            }
          >
            <VehicleItem vehicle={vehicle} />
          </Suspense>
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

export default VehicleGrid;
