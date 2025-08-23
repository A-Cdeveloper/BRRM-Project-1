"use client";

import { useState, useCallback } from "react";
import { Button, Modal } from "@/components/ui";
import Filters from "./Filters";
import { VehicleFilters } from "@/types";
import { useVehicleFilters } from "./hooks/useVehicleFilters";

type SearchParams = { [key: string]: string | string[] | undefined };

export default function VehiclesFilterBox({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const { currentFilters, updateFilters, resetFilters } =
    useVehicleFilters(searchParams);

  const handleOpenFilterModal = useCallback(() => {
    setIsFilterModalOpen(true);
  }, []);

  const handleCloseFilterModal = useCallback(() => {
    setIsFilterModalOpen(false);
  }, []);

  const handleApplyFilters = useCallback(
    (filters: VehicleFilters) => {
      updateFilters(filters);
      setIsFilterModalOpen(false);
    },
    [updateFilters]
  );

  return (
    <>
      <Button
        variant="outlined"
        className="relative sm:absolute sm:top-24 right-0 sm:right-2 2xl:right-0 z-10 mb-4 sm:my-0 mt-8"
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
          onResetFilters={resetFilters}
          currentFilters={currentFilters}
        />
      </Modal>
    </>
  );
}
