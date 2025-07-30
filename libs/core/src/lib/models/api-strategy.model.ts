import { ApiResponse } from "./api-response.model";

/**
 * Abstract clss for API strategies.
 * Defines methods to match API paths and construct URLs.
 * @template T - The type of data returned by the API.
 * @remarks
 * This interface is used to create different strategies for handling API requests.
 * Each strategy can implement its own logic for matching paths and constructing URLs.
 * It can also include a method for parsing the response data if needed.
 */
export abstract class ApiStrategy<T = unknown> {
  abstract matches(path: string): boolean;
  abstract getUrl(baseApiUrl: string): string;
  abstract parseResponse?(response: unknown): ApiResponse<T>;
}