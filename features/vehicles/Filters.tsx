"use client";

import { useState } from "react";
import { Select, Button, FontAwesomeIcon, IconButton } from "@/components/ui";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type FilterValues = {
  make: string;
  model: string;
  priceFrom: string;
  priceTo: string;
  gear: string;
  fuel: string;
  mileageFrom: string;
  mileageTo: string;
};

type VehicleFilterProps = {
  onClose: () => void;
  onApplyFilters: (filters: FilterValues) => void;
};

export default function Filters({
  onClose,
  onApplyFilters,
}: VehicleFilterProps) {
  const [filters, setFilters] = useState<FilterValues>({
    make: "",
    model: "",
    priceFrom: "",
    priceTo: "",
    gear: "",
    fuel: "",
    mileageFrom: "",
    mileageTo: "",
  });

  // Mock data - kasnije će doći iz API-ja
  const makeOptions = [
    { value: "audi", label: "Audi" },
    { value: "bmw", label: "BMW" },
    { value: "mercedes", label: "Mercedes-Benz" },
    { value: "maserati", label: "Maserati" },
    { value: "ford", label: "Ford" },
    { value: "kia", label: "Kia" },
  ];

  const modelOptions = [
    { value: "a4", label: "A4" },
    { value: "a6", label: "A6" },
    { value: "x3", label: "X3" },
    { value: "x5", label: "X5" },
    { value: "c-class", label: "C-Class" },
    { value: "e-class", label: "E-Class" },
  ];

  const gearOptions = [
    { value: "automatic", label: "Automatic" },
    { value: "manual", label: "Manual" },
  ];

  const fuelOptions = [
    { value: "petrol", label: "Petrol" },
    { value: "diesel", label: "Diesel" },
    { value: "hybrid", label: "Hybrid" },
    { value: "electric", label: "Electric" },
  ];

  const handleFilterChange = (field: keyof FilterValues, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      make: "",
      model: "",
      priceFrom: "",
      priceTo: "",
      gear: "",
      fuel: "",
      mileageFrom: "",
      mileageTo: "",
    });
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters);
    onClose();
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
          options={makeOptions}
          value={filters.make}
          onChange={(value) => handleFilterChange("make", value)}
          placeholder="Make"
          className="w-full"
        />

        {/* Model */}
        <Select
          options={modelOptions}
          value={filters.model}
          onChange={(value) => handleFilterChange("model", value)}
          placeholder="Model"
          className="w-full"
        />

        {/* Price From */}
        <Select
          options={[
            { value: "10000", label: "€10,000" },
            { value: "20000", label: "€20,000" },
            { value: "30000", label: "€30,000" },
            { value: "40000", label: "€40,000" },
            { value: "50000", label: "€50,000" },
          ]}
          value={filters.priceFrom}
          onChange={(value) => handleFilterChange("priceFrom", value)}
          placeholder="Price from"
          className="w-full"
        />

        {/* Price To */}
        <Select
          options={[
            { value: "20000", label: "€20,000" },
            { value: "30000", label: "€30,000" },
            { value: "40000", label: "€40,000" },
            { value: "50000", label: "€50,000" },
            { value: "100000", label: "€100,000" },
          ]}
          value={filters.priceTo}
          onChange={(value) => handleFilterChange("priceTo", value)}
          placeholder="Price to"
          className="w-full"
        />

        {/* Gear */}
        <Select
          options={gearOptions}
          value={filters.gear}
          onChange={(value) => handleFilterChange("gear", value)}
          placeholder="Gear"
          className="w-full"
        />

        {/* Fuel */}
        <Select
          options={fuelOptions}
          value={filters.fuel}
          onChange={(value) => handleFilterChange("fuel", value)}
          placeholder="Fuel"
          className="w-full"
        />

        {/* Mileage From */}
        <Select
          options={[
            { value: "0", label: "0 km" },
            { value: "10000", label: "10,000 km" },
            { value: "50000", label: "50,000 km" },
            { value: "100000", label: "100,000 km" },
          ]}
          value={filters.mileageFrom}
          onChange={(value) => handleFilterChange("mileageFrom", value)}
          placeholder="Mileage from"
          className="w-full"
        />

        {/* Mileage To */}
        <Select
          options={[
            { value: "50000", label: "50,000 km" },
            { value: "100000", label: "100,000 km" },
            { value: "150000", label: "150,000 km" },
            { value: "200000", label: "200,000 km" },
          ]}
          value={filters.mileageTo}
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
