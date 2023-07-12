import { z } from 'zod';

const BoardCreateSchema = z
  .object({
    name: z.string().trim().nonempty(), //BUG: Trim is not working
  })
  .required();

export { BoardCreateSchema };
