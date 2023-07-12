import { z } from 'zod';

const ColumnValidateParametersSchema = z.number().int().positive();

export { ColumnValidateParametersSchema };
