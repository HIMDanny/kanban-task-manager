import { z } from 'zod';

const ColumnUpdateBodySchema = z.object({
  name: z.string().trim().nonempty().optional(), //BUG: Trim is not working
  color: z.string().trim().nonempty().optional(), //BUG: Trim is not working; 500 error when is not provided color
});

export { ColumnUpdateBodySchema };
