import { useQuery } from "@tanstack/react-query";
import { getVehicleById } from "../api/vehicles";
import { Vehicle } from "@/types";

const useVehicle = (id: string) => {
  return useQuery<Vehicle>({
    queryKey: ["vehicles", id],
    queryFn: () => getVehicleById(id),
    enabled: !!id, // Only run query if id exists
    staleTime: 1 * 60 * 1000, // 1 minute - cene i status se često menjaju
  });
};

export default useVehicle;
