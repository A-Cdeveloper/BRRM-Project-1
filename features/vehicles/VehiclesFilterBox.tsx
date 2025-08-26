"use client";

import { useState, useCallback, useEffect } from "react";
import { Button, Modal } from "@/components/ui";
import Filters from "./Filters";
import { VehicleFilters, VehiclesResponse } from "@/types";
import { useVehicleFilters } from "./hooks/useVehicleFilters";
import { buildDynamicVehicleFilterOptions } from "./utils/buildFilterOptions";
import { VEHICLES_PER_PAGE } from "@/constants";

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

  // Build dynamic options from the full dataset (fetch a large slice once)
  const [dynamicOptions, setDynamicOptions] = useState<
    ReturnType<typeof buildDynamicVehicleFilterOptions> | undefined
  >(undefined);

  useEffect(() => {
    let isMounted = true;
    const params = new URLSearchParams({
      page: "1",
      limit: String(VEHICLES_PER_PAGE * 1000),
    });

    // Do not include filters here; options should reflect the full dataset
    fetch(`/api/vehicles?${params.toString()}`)
      .then((response) =>
        response.ok ? response.json() : Promise.reject(response.status)
      )
      .then((data: VehiclesResponse) => {
        if (!isMounted) return;
        const vehicles = Array.isArray(data.results) ? data.results : [];
        if (vehicles.length) {
          setDynamicOptions(buildDynamicVehicleFilterOptions(vehicles));
        } else {
          setDynamicOptions(undefined);
        }
      })
      .catch(() => {
        if (!isMounted) return;
        setDynamicOptions(undefined);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Button
        variant="outlined"
        className="relative sm:absolute sm:top-24 right-0 sm:right-2 2xl:right-0 z-10 mb-4 sm:my-0 mt-8"
        onClick={handleOpenFilterModal}
        aria-label="Open vehicle filters"
        aria-describedby="filter-help"
        aria-expanded={isFilterModalOpen}
        aria-haspopup="dialog"
      >
        FILTERS
      </Button>

      <div id="filter-help" className="sr-only">
        Click to open vehicle filter options
      </div>

      {/* Filter Modal */}
      <Modal
        isOpen={isFilterModalOpen}
        onClose={handleCloseFilterModal}
        className="w-full max-w-screen-2xl"
        backdropClassName="!items-start sm:!items-center"
        closeOnEscape={true}
        closeOnBackdropClick={true}
        aria-label="Vehicle filters"
        aria-describedby="filter-description"
      >
        <div id="filter-description" className="sr-only">
          Vehicle filter options. Use these filters to find specific vehicles.
        </div>
        <Filters
          onClose={handleCloseFilterModal}
          onApplyFilters={handleApplyFilters}
          onResetFilters={resetFilters}
          currentFilters={currentFilters}
          dynamicOptions={dynamicOptions}
        />
      </Modal>
    </>
  );
}
