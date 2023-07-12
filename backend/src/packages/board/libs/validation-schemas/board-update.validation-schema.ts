import { z } from 'zod';

const BoardUpdateBodySchema = z.object({
  name: z.string().trim().nonempty(), //BUG: Trim is not working
});

export { BoardUpdateBodySchema };
