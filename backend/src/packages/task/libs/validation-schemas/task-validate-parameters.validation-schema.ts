import { z } from 'zod';

const TaskValidateParametersSchema = z.number().int().positive();

export { TaskValidateParametersSchema };
