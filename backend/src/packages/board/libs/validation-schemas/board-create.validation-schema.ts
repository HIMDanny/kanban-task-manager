import { z } from 'zod';

const BoardCreateSchema = z
  .object({
    name: z.string().trim().min(1), //BUG: Trim is not working
  })
  .required();

export { BoardCreateSchema };
