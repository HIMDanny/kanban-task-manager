import { z } from 'zod';

const TaskUpdateSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
});

export { TaskUpdateSchema };
