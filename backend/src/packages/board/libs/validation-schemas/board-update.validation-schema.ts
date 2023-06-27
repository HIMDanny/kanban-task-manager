import { z } from 'zod';

const BoardUpdateBodySchema = z.object({
  name: z.string().trim().nonempty(),
});

export { BoardUpdateBodySchema };
