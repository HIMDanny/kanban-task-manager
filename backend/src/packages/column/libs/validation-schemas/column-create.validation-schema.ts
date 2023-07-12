import { z } from 'zod';

const ColumnCreateSchema = z
  .object({
    name: z.string().trim().min(1), //BUG: Trim is not working
    color: z.string().trim().min(1), //BUG: Trim is not working
  })
  .required();

export { ColumnCreateSchema };
