import { z } from 'zod';

const SubtaskUpdateSchema = z.object({
  title: z.string().min(1).optional(),
});

export { SubtaskUpdateSchema };
