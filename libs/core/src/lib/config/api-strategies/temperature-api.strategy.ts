import z from "zod";
import { ApiStrategy, Temperature, temperatureSchema, ApiResponse, apiResponseSchema } from "../../models";

const temperatureDataResponseSchema = z.object({
  error: z.unknown().nullable(),
  result: z.array(temperatureSchema),
});

export type TemperatureDataResponse = z.infer<typeof temperatureDataResponseSchema>;

export class TemperatureApiStrategy extends ApiStrategy<Temperature> {
  matches(path: string): boolean {
    return path === 'temperature';
  }

  getUrl(baseApiUrl: string): string {
    return `${baseApiUrl}/temperature-api`;
  }

  parseResponse(response: any): ApiResponse<Temperature> {
    const parsedResponse = apiResponseSchema(temperatureSchema).safeParse(response);
    if (!parsedResponse.success) {
      throw new Error(`Invalid response format: ${parsedResponse.error.message}`);
    }

    return parsedResponse.data;
  }
}