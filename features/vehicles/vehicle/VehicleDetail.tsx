"use client";

import { Spinner } from "@/components/ui";
import dynamic from "next/dynamic";
import useVehicle from "../hooks/useVehicle";
import useVehiclePhotos from "../hooks/useVehiclePhotos";
import VehicleData from "./VehicleData";
import VehicleDescription from "./VehicleDescription";
import { Vehicle } from "@/types";
import { VehicleNotFound } from "../VehicleNotFound";

// Dinamički import za VehicleEquipment
const VehicleEquipment = dynamic(() => import("./VehicleEquipment"), {
  loading: () => <Spinner />,
  ssr: false,
});

// Dinamički import za VehicleImageSlider
const VehicleImageSlider = dynamic(() => import("./vehicle-slider"), {
  loading: () => <Spinner />,
  ssr: false,
});

type VehicleDetailProps = {
  vehicleId: string;
};

const VehicleDetail = ({ vehicleId }: VehicleDetailProps) => {
  const { data, isLoading, error } = useVehicle(vehicleId);
  const { data: photos, isLoading: photosLoading } =
    useVehiclePhotos(vehicleId);

  if (isLoading) return <Spinner />;
  if (error || !data) return <VehicleNotFound />;

  // Use photos from API if available, otherwise fallback to previewPhoto or demo image
  const images =
    photos && photos.length > 0
      ? photos.map((photo) => photo.url)
      : data.previewPhoto?.url
      ? [data.previewPhoto.url]
      : ["/images/demo.png"];

  return (
    <>
      <div
        className="flex flex-wrap lg:flex-nowrap justify-between space-x-0 lg:space-x-4 space-y-3 lg:space-y-0 mt-1 mb-8"
        role="main"
        aria-labelledby="vehicle-title"
      >
        <VehicleImageSlider
          images={images}
          photos={photos || []}
          isLoading={photosLoading}
        />
        <VehicleData vehicle={data || ({} as Vehicle)} />
      </div>

      <div
        className="flex flex-wrap lg:flex-nowrap justify-between space-x-0 lg:space-x-4 space-y-3 lg:space-y-0"
        role="complementary"
        aria-label="Vehicle additional information"
      >
        <VehicleDescription description={data?.description || ""} />
        <VehicleEquipment vehicleId={vehicleId} />
      </div>
    </>
  );
};

export default VehicleDetail;
