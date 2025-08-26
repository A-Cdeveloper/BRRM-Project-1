import { useInfiniteQuery } from "@tanstack/react-query";
import { getVehicles } from "../api/vehicles";
import { VehiclesResponse, VehicleFilters } from "@/types";

const useVehicles = (filters: VehicleFilters = {}) => {
  return useInfiniteQuery<VehiclesResponse>({
    queryKey: ["vehicles", filters],
    queryFn: ({ pageParam = 1 }) => getVehicles(pageParam as number, filters),
    getNextPageParam: (lastPage) =>
      lastPage.hasNextPage ? lastPage.nextPage : undefined,
    initialPageParam: 1,
    staleTime: 2 * 60 * 1000, // 2 minutes - inventory se umereno menja
  });
};

export default useVehicles;
