import { useQuery } from "@tanstack/react-query";
import type { AutoHouse } from "@/types";

async function fetchCompanyData(): Promise<AutoHouse> {
  const response = await fetch("/api/company");

  if (!response.ok) {
    throw new Error("Failed to fetch company data");
  }

  return response.json();
}

export function useCompany() {
  return useQuery({
    queryKey: ["company"],
    queryFn: fetchCompanyData,
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 1,
  });
}
