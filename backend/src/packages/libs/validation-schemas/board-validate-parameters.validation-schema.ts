import { z } from 'zod';

const BoardValidateParametersSchema = z
  .object({
    id: z.number().int().positive(),
  })
  .required();

export { BoardValidateParametersSchema };
