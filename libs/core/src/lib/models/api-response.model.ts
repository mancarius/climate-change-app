import { z } from 'zod';

/**
 * Generic API response type for all Global Warming API calls.
 */
export const apiResponseSchema = <T extends z.ZodTypeAny>(resultSchema: T) =>
  z.object({
    error: z.unknown().nullable(),
    result: z.array(resultSchema),
  });

export type ApiResponse<T> = {
  error: unknown | null;
  result: T[];
};
