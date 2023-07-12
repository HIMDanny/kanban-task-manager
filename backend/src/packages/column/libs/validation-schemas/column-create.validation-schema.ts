import { z } from 'zod';

const ColumnCreateSchema = z
  .object({
    name: z.string().trim().nonempty(), //BUG: Trim is not working
  })
  .required();

export { ColumnCreateSchema };
