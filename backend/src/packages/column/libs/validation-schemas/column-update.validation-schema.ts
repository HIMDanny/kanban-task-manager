import { z } from 'zod';

const ColumnUpdateSchema = z.object({
  name: z.string().trim().min(1).optional(), //BUG: Trim is not working
  color: z.string().trim().min(1).optional(), //BUG: Trim is not working
});

export { ColumnUpdateSchema };
