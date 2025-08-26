import { useQuery } from "@tanstack/react-query";
import { getVehicleEquipment } from "../api/vehicles";
import { VehicleEquipmentItem } from "@/types";

const useVehicleEquipment = (vehicleId: string) => {
  return useQuery<VehicleEquipmentItem[]>({
    queryKey: ["vehicle-equipment", vehicleId],
    queryFn: () => getVehicleEquipment(vehicleId),
    enabled: !!vehicleId,
    staleTime: 5 * 60 * 1000, // 5 minutes - equipment se retko menja
  });
};

export default useVehicleEquipment;
