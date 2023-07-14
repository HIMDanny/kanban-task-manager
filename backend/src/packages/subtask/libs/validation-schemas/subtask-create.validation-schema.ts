import { z } from 'zod';

const SubtaskCreateSchema = z
  .object({
    title: z.string().min(1),
    taskId: z.number().int().positive(),
  })
  .required();

export { SubtaskCreateSchema };
