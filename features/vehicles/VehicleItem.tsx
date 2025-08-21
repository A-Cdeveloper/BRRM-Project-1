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
          src="/images/vehicles/vehicle-1.png"
          alt={vehicle.brand}
          className="w-full h-full object-cover"
          width={300}
          height={300}
        />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-white text-xl">
            {vehicle.brand} {vehicle.model}
          </h3>
          <p className="text-white/50 text-md mb-0 truncate">
            {vehicle.model} {vehicle.year}
          </p>
        </div>
        <div className="text-primary font-bold text-3xl mb-0">
          {formatPrice(vehicle.price)}
        </div>

        <div className=" text-sm [&>p]:mb-[4px] [&>p]:font-light [&>p>span]:font-medium">
          <p>
            <span>Mileage:</span> {vehicle.mileage}
          </p>
          <p>
            <span>Gear:</span> {vehicle.fuel}
          </p>
          <p>
            <span>Power:</span> {vehicle.transmission}
          </p>
          <p>
            <span>Fuel:</span> {vehicle.fuel}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VehicleItem;
