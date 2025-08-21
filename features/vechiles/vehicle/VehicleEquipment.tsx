"use client";

import Button from "@/components/ui/Button";
import FontAwesomeIcon from "@/components/ui/FontAwesomeIcon";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, useMemo } from "react";

const VehicleEquipment = () => {
  const [showAll, setShowAll] = useState(false);

  const equipmentFeatures = [
    "AIR CONDITIONING",
    "CRUISE CONTROL",
    "HEATED ST. WHEEL",
    "LEATHER ST. WHEEL",
    "NAVIGATION SYSTEM",
    "POWER WINDOWS",
    "ARMREST - FRONT",
    "EL. SIDE MIRRORS",
    "HILL HOLDER",
    "LIGHT SENSOR",
    "PANORAMA ROOF",
    "RAIN SENSOR",
    "4 ZONES CLIMATE",
    "ADJUSTABLE SEATS",
    "LEATHER SEATS",
    "LUMBAL SUPPORT",
    "PARKING ASSISTANT",
    "SEAT HEATING",
    // Dodatni features koji će se prikazati preko VIEW ALL
    "BLIND SPOT MONITORING",
    "LANE DEPARTURE WARNING",
    "FORWARD COLLISION WARNING",
    "AUTOMATIC EMERGENCY BRAKING",
    "ADAPTIVE CRUISE CONTROL",
    "REAR VIEW CAMERA",
    "FRONT PARKING SENSORS",
    "REAR PARKING SENSORS",
    "KEYLESS ENTRY",
    "PUSH BUTTON START",
    "DUAL ZONE CLIMATE CONTROL",
    "HEATED MIRRORS",
    "AUTO DIM MIRRORS",
    "POWER SEATS",
    "MEMORY SEATS",
    "VENTILATED SEATS",
    "MASSAGE SEATS",
    "WIRELESS CHARGING",
    "APPLE CARPLAY",
    "ANDROID AUTO",
    "BLUETOOTH CONNECTIVITY",
    "USB PORTS",
    "12V POWER OUTLET",
    "ROOF RAILS",
    "TOWING PACKAGE",
    "MUD FLAPS",
    "WEATHER TECH FLOOR MATS",
  ];

  const displayedFeatures = useMemo(() => {
    return showAll ? equipmentFeatures : equipmentFeatures.slice(0, 18);
  }, [showAll, equipmentFeatures]);

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

  return (
    <div className="w-full lg:w-[50%]">
      <h2 className="text-lg mb-2 text-white">EQUIPMENT:</h2>

      {/* Equipment features in 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-2 mb-6">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="space-y-1">
            {column.map((feature, featureIndex) => (
              <div
                key={featureIndex}
                className="flex items-center space-x-[5px]"
              >
                <FontAwesomeIcon
                  icon={faCheck}
                  classname="text-primary text-sm flex-shrink-0 font-semibold"
                />
                <span className="text-primary font-semibold">{feature}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {equipmentFeatures.length > 18 && (
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
