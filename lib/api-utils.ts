import { NextResponse } from "next/server";

/**
 * Utility function for creating consistent error responses across API routes
 */
export const createErrorResponse = (
  status: number,
  message: string,
  details?: unknown
) => {
  return NextResponse.json({ error: message, details }, { status });
};

/**
 * Utility function for validating and bounding pagination parameters
 */
export const validatePaginationParams = (page: number, limit: number) => {
  const currentPage = Math.max(
    1,
    Math.min(1000, Number.isFinite(page) ? page : 1)
  );
  const boundedLimit = Math.max(
    1,
    Math.min(100, Number.isFinite(limit) ? limit : 10)
  );

  return { currentPage, limit: boundedLimit };
};
