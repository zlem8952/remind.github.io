import { z } from 'zod';

export const hospitalSchema = z.array(
  z.object({
    yadmNm: z.string().min(2),
    addr: z.string(),
    telno: z.string().regex(/^\d{2,4}-\d{3,4}-\d{4}$/),
    clCdNm: z.enum(['내과', '외과', '정형외과']),
    estbDd: z.string().datetime(),
  })
);
