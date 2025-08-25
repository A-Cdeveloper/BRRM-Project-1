import Image from "next/image";
import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { VehicleItemCard } from "@/types";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";
import { getMonthYearFromDate } from "@/utils/formatDate";
import { getVehicleById } from "./api/vehicles";

const VehicleItem = React.memo(({ vehicle }: { vehicle: VehicleItemCard }) => {
  const queryClient = useQueryClient();

  const imageUrl = vehicle.previewPhoto?.url ?? "/images/demo.png";
  const priceValue =
    vehicle.retailPrice ??
    vehicle.prices.find(
      (p: { type: string; value: number }) => p.type === "retail"
    )?.value ??
    vehicle.prices[0]?.value ??
    null;

  // Prefetch vehicle details on hover
  const prefetchVehicle = () => {
    queryClient.prefetchQuery({
      queryKey: ["vehicle", vehicle.id],
      queryFn: () => getVehicleById(vehicle.id),
      staleTime: 5 * 60 * 1000, // 5 min
    });
  };

  return (
    <Link
      href={`/vehicles/${vehicle.id}`}
      key={vehicle.id}
      className="bg-secondary p-2 flex flex-wrap gap-2"
      onMouseEnter={prefetchVehicle}
    >
      <div className="w-full xl:w-[296px]  xl:h-[222px]">
        <Image
          src={imageUrl}
          alt={vehicle.make}
          className="w-full h-full object-cover"
          width={300}
          height={300}
        />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-white text-xl">
            {vehicle.make} {vehicle.model}
          </h3>
          <p className="text-white/50 text-md mb-0 truncate max-w-[200px]">
            {vehicle.typeName}
          </p>
        </div>
        {priceValue && (
          <div className="text-primary font-bold text-3xl my-1">
            {formatPrice(priceValue)}
          </div>
        )}

        <div className=" text-sm [&>p]:mb-[4px] [&>p]:font-light [&>p>span]:font-medium">
          {vehicle.mileage && (
            <p>
              <span>Mileage:</span> {vehicle.mileage} km
            </p>
          )}
          {vehicle.firstRegistration && (
            <p>
              <span>First Registration:</span>{" "}
              {getMonthYearFromDate(vehicle.firstRegistration)}
            </p>
          )}
          {vehicle.seriesName && (
            <p>
              <span>Series Name:</span> {vehicle.seriesName}
            </p>
          )}
          {vehicle.generation && (
            <p>
              <span>Generation:</span> {vehicle.generation}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
});

VehicleItem.displayName = "VehicleItem";

export default VehicleItem;
