"use client";

import { useState, useEffect } from "react";
import { Select, Button, FontAwesomeIcon, IconButton } from "@/components/ui";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { VEHICLE_FILTERS } from "@/constants";
import { VehicleFilters } from "@/types";

type VehicleFilterProps = {
  onClose: () => void;
  onApplyFilters: (filters: VehicleFilters) => void;
  onResetFilters?: () => void;
  currentFilters?: VehicleFilters;
};

export default function Filters({
  onClose,
  onApplyFilters,
  onResetFilters,
  currentFilters = {},
}: VehicleFilterProps) {
  const [filters, setFilters] = useState<VehicleFilters>(currentFilters);

  // Update local state when currentFilters change
  useEffect(() => {
    setFilters(currentFilters);
  }, [currentFilters]);

  const handleFilterChange = (field: keyof VehicleFilters, value: string) => {
    setFilters((prev: VehicleFilters) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleResetFilters = () => {
    setFilters({});
    onResetFilters?.();
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters);
  };

  return (
    <div className="bg-secondary p-2">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-white text-2xl font-semibold">FILTERS:</h2>

        <IconButton
          icon={faTimes}
          onClick={onClose}
          ariaLabel="Close filters"
          tabIndex={0}
          classname="text-xl top-0"
        />
      </div>

      {/* Filter Fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 my-2">
        {/* Make */}
        <Select
          options={VEHICLE_FILTERS.makes}
          value={filters.make || ""}
          onChange={(value) => handleFilterChange("make", value)}
          placeholder="Make"
          className="w-full"
        />

        {/* Model */}
        <Select
          options={VEHICLE_FILTERS.models}
          value={filters.model || ""}
          onChange={(value) => handleFilterChange("model", value)}
          placeholder="Model"
          className="w-full"
        />

        {/* Body Type */}
        <Select
          options={VEHICLE_FILTERS.bodyTypes}
          value={filters.bodyType || ""}
          onChange={(value) => handleFilterChange("bodyType", value)}
          placeholder="Body Type"
          className="w-full"
        />

        {/* Category */}
        <Select
          options={VEHICLE_FILTERS.categories}
          value={filters.category || ""}
          onChange={(value) => handleFilterChange("category", value)}
          placeholder="Category"
          className="w-full"
        />

        {/* Price From */}
        <Select
          options={VEHICLE_FILTERS.priceFrom}
          value={filters.priceFrom || ""}
          onChange={(value) => handleFilterChange("priceFrom", value)}
          placeholder="Price from"
          className="w-full"
        />

        {/* Price To */}
        <Select
          options={VEHICLE_FILTERS.priceTo}
          value={filters.priceTo || ""}
          onChange={(value) => handleFilterChange("priceTo", value)}
          placeholder="Price to"
          className="w-full"
        />

        {/* Mileage From */}
        <Select
          options={VEHICLE_FILTERS.mileageFrom}
          value={filters.mileageFrom || ""}
          onChange={(value) => handleFilterChange("mileageFrom", value)}
          placeholder="Mileage from"
          className="w-full"
        />

        {/* Mileage To */}
        <Select
          options={VEHICLE_FILTERS.mileageTo}
          value={filters.mileageTo || ""}
          onChange={(value) => handleFilterChange("mileageTo", value)}
          placeholder="Mileage to"
          className="w-full"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap sm:flex-nowrap gap-2 justify-end border-t border-border pt-2">
        <Button
          onClick={handleResetFilters}
          variant="outlined"
          className="w-full sm:w-auto px-2 md:px-16 lg:px-20"
        >
          RESET FILTERS
        </Button>
        <Button
          onClick={handleApplyFilters}
          className="w-full sm:w-auto px-2 md:px-16 lg:px-20"
        >
          APPLY FILTERS
        </Button>
      </div>
    </div>
  );
}
