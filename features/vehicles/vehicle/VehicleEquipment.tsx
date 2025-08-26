"use client";

import { Button, FontAwesomeIcon, Spinner } from "@/components/ui";
import { useMemo, useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import useVehicleEquipment from "../hooks/useVehicleEquipment";

interface VehicleEquipmentProps {
  vehicleId: string;
}

const VehicleEquipment = ({ vehicleId }: VehicleEquipmentProps) => {
  const [showAll, setShowAll] = useState(false);
  const { data: equipment, isLoading, error } = useVehicleEquipment(vehicleId);

  const displayedFeatures = useMemo(() => {
    if (!equipment) return [];
    return showAll ? equipment : equipment.slice(0, 18);
  }, [equipment, showAll]);

  const columns = useMemo(() => {
    const totalItems = displayedFeatures.length;
    const column1 = [];
    const column2 = [];
    const column3 = [];

    for (let i = 0; i < totalItems; i++) {
      if (i % 3 === 0) {
        column1.push(displayedFeatures[i]);
      } else if (i % 3 === 1) {
        column2.push(displayedFeatures[i]);
      } else {
        column3.push(displayedFeatures[i]);
      }
    }

    return [column1, column2, column3];
  }, [displayedFeatures]);

  if (isLoading) {
    return (
      <div className="w-full lg:w-[50%]">
        <h2 className="text-lg mb-2 text-white">EQUIPMENT:</h2>
        <div className="flex justify-center">
          <Spinner />
        </div>
      </div>
    );
  }

  if (error || !equipment) {
    return (
      <div className="w-full lg:w-[50%]">
        <h2 className="text-lg mb-1 text-white">EQUIPMENT:</h2>
        <div className="flex justify-center">
          <p className="text-white">Failed to load equipment</p>
        </div>
      </div>
    );
  }

  if (equipment.length === 0) {
    return (
      <div className="w-full lg:w-[50%]">
        <h2 className="text-lg mb-1 text-white">EQUIPMENT:</h2>

        <p className="text-white">No equipment features found</p>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-[50%]">
      <h2 className="text-lg mb-1 text-white">EQUIPMENT:</h2>

      {/* Equipment features in 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-2 mb-6">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="space-y-1">
            {column.map((feature) => (
              <div key={feature.id} className="flex items-center space-x-[5px]">
                <FontAwesomeIcon
                  icon={faCheck}
                  classname="text-primary text-sm flex-shrink-0 font-semibold"
                />
                <span className="text-primary font-semibold">
                  {feature.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {equipment.length > 18 && (
        <div className="flex justify-center">
          <Button
            variant="outlined"
            onClick={() => setShowAll(!showAll)}
            className="w-full sm:w-auto"
          >
            {showAll ? "VIEW LESS" : "VIEW ALL"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default VehicleEquipment;
