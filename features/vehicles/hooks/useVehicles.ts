import { useInfiniteQuery } from "@tanstack/react-query";
import { getVehicles } from "../api/vehicles";
import { VehiclesResponse } from "@/types";

const useVehicles = () => {
  return useInfiniteQuery<VehiclesResponse>({
    queryKey: ["vehicles"],
    queryFn: ({ pageParam = 1 }) => getVehicles(pageParam as number),
    getNextPageParam: (lastPage) =>
      lastPage.hasNextPage ? lastPage.nextPage : undefined,
    initialPageParam: 1,
  });
};

export default useVehicles;
