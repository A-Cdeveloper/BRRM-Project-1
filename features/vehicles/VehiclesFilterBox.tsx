"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import Filters from "./Filters";

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

export default function VehiclesFilterBox() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<FilterValues>({
    make: "",
    model: "",
    priceFrom: "",
    priceTo: "",
    gear: "",
    fuel: "",
    mileageFrom: "",
    mileageTo: "",
  });

  const handleOpenFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  const handleCloseFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  const handleApplyFilters = (filters: FilterValues) => {
    setActiveFilters(filters);
    console.log("Applied filters:", filters);
    // Ovde će kasnije biti logika za filtriranje vozila
  };

  return (
    <>
      <Button
        variant="outlined"
        className="relative sm:absolute sm:top-24 right-0 sm:right-2 2xl:right-0 z-10 mb-4 sm:my-0"
        onClick={handleOpenFilterModal}
      >
        FILTERS
      </Button>

      {/* Filter Modal */}
      <Modal
        isOpen={isFilterModalOpen}
        onClose={handleCloseFilterModal}
        className="w-full max-w-screen-2xl"
        backdropClassName="!items-start sm:!items-center"
        closeOnEscape={true}
        closeOnBackdropClick={true}
      >
        <Filters
          onClose={handleCloseFilterModal}
          onApplyFilters={handleApplyFilters}
        />
      </Modal>
    </>
  );
}
