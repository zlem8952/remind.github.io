// pharmacy.schema.js
import { z } from 'zod';

const TimeSchema = z.string().regex(/^\d{4}$/).optional();

export const PharmacySchema = z.array(
  z.object({
    dutyName: z.string().min(2),
    dutyAddr: z.string(),
    dutyTel1: z.string().regex(/^\d{2,4}-\d{3,4}-\d{4}$/).optional(),
    wgs84Lon: z.number(),
    wgs84Lat: z.number(),
    dutyTime: z.object({
      mon: z.object({ start: TimeSchema, end: TimeSchema }),
      // ... 다른 요일 추가
    })
  })
);
