import { z } from 'zod';

export const HospitalSchema = z.array(
  z.object({
    yadmNm: z.string(),
    addr: z.string(),
    telno: z.string().optional(),
    clCdNm: z.enum(['상급종합', '종합', '병원', '의원']),
    estbDd: z.string().regex(/^\d{8}$/),
    XPos: z.number(),
    YPos: z.number()
  })
);
