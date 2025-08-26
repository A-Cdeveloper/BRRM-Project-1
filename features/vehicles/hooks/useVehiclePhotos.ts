import { useQuery } from "@tanstack/react-query";
import { getVehiclePhotos } from "../api/vehicles";
import { VehiclePhoto } from "@/types";

const useVehiclePhotos = (vehicleId: string) => {
  return useQuery<VehiclePhoto[]>({
    queryKey: ["vehicle-photos", vehicleId],
    queryFn: () => getVehiclePhotos(vehicleId),
    enabled: !!vehicleId,
    staleTime: 3 * 60 * 1000, // 3 minutes - photos se umereno menjaju
  });
};

export default useVehiclePhotos;
