import { useQuery } from "@tanstack/react-query";
import { getVehiclePhotos } from "../api/vehicles";
import { VehiclePhoto } from "@/types";

const useVehiclePhotos = (vehicleId: string) => {
  return useQuery<VehiclePhoto[]>({
    queryKey: ["vehicle-photos", vehicleId],
    queryFn: () => getVehiclePhotos(vehicleId),
    enabled: !!vehicleId,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export default useVehiclePhotos;
