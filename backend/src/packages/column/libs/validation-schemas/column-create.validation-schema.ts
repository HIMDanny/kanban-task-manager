import { z } from 'zod';

const ColumnCreateSchema = z
  .object({
    name: z.string().min(1),
    color: z.string().min(1),
    boardId: z.number().int().positive(),
  })
  .required();

export { ColumnCreateSchema };
