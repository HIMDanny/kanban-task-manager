import { z } from 'zod';

const SubtaskValidateParametersSchema = z.number().int().positive();

export { SubtaskValidateParametersSchema };
