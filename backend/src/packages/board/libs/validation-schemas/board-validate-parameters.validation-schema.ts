import { z } from 'zod';

const BoardValidateParametersSchema = z.number().int().positive();

export { BoardValidateParametersSchema };
