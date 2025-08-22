import Image from "next/image";
import React from "react";

import { Vehicle } from "@/types";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";

const VehicleItem = ({ vehicle }: { vehicle: Vehicle }) => {
  return (
    <Link
      href={`/vehicles/${vehicle.id}`}
      key={vehicle.id}
      className="bg-secondary p-2 flex flex-wrap gap-2"
    >
      <div className="w-full xl:w-[296px]  xl:h-[222px]">
        <Image
          src={vehicle.previewPhoto.url}
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
          <p className="text-white/50 text-md mb-0 truncate">
            {vehicle.seriesName}
          </p>
        </div>
        <div className="text-primary font-bold text-3xl mb-0">
          {formatPrice(vehicle.prices[0].value)}
        </div>

        <div className=" text-sm [&>p]:mb-[4px] [&>p]:font-light [&>p>span]:font-medium">
          {vehicle.typeName && (
            <p>
              <span>Engine:</span> {vehicle.typeName}
            </p>
          )}
          {vehicle.generation && (
            <p>
              <span>Generation:</span> {vehicle.generation}
            </p>
          )}
          {vehicle.mileage && (
            <p>
              <span>Mileage:</span> {vehicle.mileage} km
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default VehicleItem;
