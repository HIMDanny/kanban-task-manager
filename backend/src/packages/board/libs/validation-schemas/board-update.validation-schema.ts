import { z } from 'zod';

const BoardUpdateSchema = z.object({
  name: z.string().trim().min(1), //BUG: Trim is not working
});

export { BoardUpdateSchema };
