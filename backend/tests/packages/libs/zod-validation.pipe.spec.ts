import { BadRequestException } from '@nestjs/common';
import type { Schema } from 'zod';
import { z } from 'zod';

import { ZodValidationPipe } from '../../../src/packages/board/libs/helpers/pipes/zod-validation.pipe';

describe('ZodValidationPipe', () => {
  let pipe: ZodValidationPipe;
  const schema: Schema = z.object({
    name: z.string().nonempty(),
  });

  beforeAll(() => {
    pipe = new ZodValidationPipe(schema);
  });

  it('should transform valid input', () => {
    const validInput = { name: 'Pokemons' };
    const transformedValue = pipe.transform(validInput);
    expect(transformedValue).toBe(validInput);
  });

  it('should throw BadRequestException for invalid input', () => {
    const invalidInput = { name: '' };
    expect(() => pipe.transform(invalidInput)).toThrow(BadRequestException);
  });

  it('should throw original error if not a ZodError', () => {
    const customError = new Error('Hehe cried');
    jest.spyOn(schema, 'parse').mockImplementationOnce(() => {
      throw customError;
    });
    expect(() => pipe.transform({})).toThrow(customError);
  });
});
