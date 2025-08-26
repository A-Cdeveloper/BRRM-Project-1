"use client";

import { useState, useEffect, useCallback } from "react";
import { Select, Button, IconButton } from "@/components/ui";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { VEHICLE_FILTERS } from "@/constants";
import { VehicleFilters } from "@/types";
import type { DynamicVehicleFilterOptions } from "./utils/buildFilterOptions";

type VehicleFilterProps = {
  onClose: () => void;
  onApplyFilters: (filters: VehicleFilters) => void;
  onResetFilters?: () => void;
  currentFilters?: VehicleFilters;
  dynamicOptions?: DynamicVehicleFilterOptions;
};

export default function Filters({
  onClose,
  onApplyFilters,
  onResetFilters,
  currentFilters = {},
  dynamicOptions,
}: VehicleFilterProps) {
  const [filters, setFilters] = useState<VehicleFilters>(currentFilters);

  // Use dynamic options if provided, otherwise fall back to constants
  const options = dynamicOptions ?? {
    makes: [],
    models: [],
    bodyTypes: [],
    categories: [],
    priceFrom: VEHICLE_FILTERS.priceFrom,
    priceTo: VEHICLE_FILTERS.priceTo,
    mileageFrom: VEHICLE_FILTERS.mileageFrom,
    mileageTo: VEHICLE_FILTERS.mileageTo,
  };

  // Update local state when currentFilters change
  useEffect(() => {
    setFilters(currentFilters);
  }, [currentFilters]);

  const handleFilterChange = useCallback(
    (field: keyof VehicleFilters, value: string) => {
      setFilters((prev: VehicleFilters) => ({
        ...prev,
        [field]: value,
      }));
    },
    []
  );

  const handleResetFilters = useCallback(() => {
    setFilters({});
    onResetFilters?.();
  }, [onResetFilters]);

  const handleApplyFilters = useCallback(() => {
    onApplyFilters(filters);
  }, [onApplyFilters, filters]);

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
          options={options.makes}
          value={filters.make || ""}
          onChange={(value) => handleFilterChange("make", value)}
          placeholder="Make"
          className="w-full"
        />

        {/* Model */}
        <Select
          options={options.models}
          value={filters.model || ""}
          onChange={(value) => handleFilterChange("model", value)}
          placeholder="Model"
          className="w-full"
        />

        {/* Body Type */}
        <Select
          options={options.bodyTypes}
          value={filters.bodyType || ""}
          onChange={(value) => handleFilterChange("bodyType", value)}
          placeholder="Body Type"
          className="w-full"
        />

        {/* Category */}
        <Select
          options={options.categories}
          value={filters.category || ""}
          onChange={(value) => handleFilterChange("category", value)}
          placeholder="Category"
          className="w-full"
        />

        {/* Price From */}
        <Select
          options={options.priceFrom}
          value={filters.priceFrom || ""}
          onChange={(value) => handleFilterChange("priceFrom", value)}
          placeholder="Price from"
          className="w-full"
        />

        {/* Price To */}
        <Select
          options={options.priceTo}
          value={filters.priceTo || ""}
          onChange={(value) => handleFilterChange("priceTo", value)}
          placeholder="Price to"
          className="w-full"
        />

        {/* Mileage From */}
        <Select
          options={options.mileageFrom}
          value={filters.mileageFrom || ""}
          onChange={(value) => handleFilterChange("mileageFrom", value)}
          placeholder="Mileage from"
          className="w-full"
        />

        {/* Mileage To */}
        <Select
          options={options.mileageTo}
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
