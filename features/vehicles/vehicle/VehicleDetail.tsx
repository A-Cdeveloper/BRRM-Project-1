"use client";
import { Spinner } from "@/components/ui";
import useVehicle from "../hooks/useVehicle";
import VehicleData from "./VehicleData";
import VehicleDescription from "./VehicleDescription";
import VehicleEquipment from "./VehicleEquipment";
import VehicleImageSlider from "./vehicle-slider";
import { Vehicle } from "@/types";
import VehicleError from "../VehicleError";

interface VehicleDetailProps {
  vehicleId: string;
}

const VehicleDetail = ({ vehicleId }: VehicleDetailProps) => {
  const { data, isLoading, error } = useVehicle(vehicleId);

  if (isLoading) return <Spinner />;
  if (error) return <VehicleError message="Failed to load vehicle details" />;
  if (!data) return <div>Vehicle not found</div>;

  const images = data.previewPhoto?.url
    ? [data.previewPhoto.url]
    : ["/images/demo.png"];

  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap justify-between space-x-0 lg:space-x-4 space-y-3 lg:space-y-0 mt-1 mb-8">
        <VehicleImageSlider images={images} />
        <VehicleData vehicle={data || ({} as Vehicle)} />
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-between space-x-0 lg:space-x-4 space-y-3 lg:space-y-0">
        <VehicleDescription description={data?.description || ""} />
        <VehicleEquipment />
      </div>
    </>
  );
};

export default VehicleDetail;
