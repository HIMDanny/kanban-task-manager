import { z } from 'zod';

const TaskCreateSchema = z
  .object({
    title: z.string().min(1),
    description: z.string().min(1).optional(),
    columnId: z.number().int().positive(),
    status: z.string().min(1),
  })
  .required();

export { TaskCreateSchema };
