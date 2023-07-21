import { z } from 'zod';

const ColumnUpdateSchema = z.object({
  name: z.string().min(1).optional(),
  color: z.string().min(1).optional(),
});

export { ColumnUpdateSchema };
