import { z } from 'zod';

const BoardCreateSchema = z
  .object({
    name: z.string().trim().nonempty(),
  })
  .required();

export { BoardCreateSchema };
