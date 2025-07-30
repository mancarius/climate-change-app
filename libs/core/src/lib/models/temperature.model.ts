import z from "zod";

// Definizione dello schema dei dati con zod
export const temperatureSchema = z.object({
  time: z.string(),
  station: z.string().transform((val) => parseFloat(Number(val).toFixed(2))),
  land: z.string().transform((val) => parseFloat(Number(val).toFixed(2))),
});


/**
 * Data model to represent global temperature anomalies.
 * This model is used to define the structure of temperature data.
 * It includes the month (time), the anomaly value (station), and the uncertainty of the anomaly (land).
 * The anomaly is the difference from the average temperature for that month.
 * The uncertainty is the margin of error for the anomaly value.
 */
export type Temperature = z.infer<typeof temperatureSchema>;
