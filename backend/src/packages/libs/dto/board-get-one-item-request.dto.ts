import { Transform } from 'class-transformer';

class BoardGetOneItemRequestDto {
  @Transform(({ value }: { value: string }) => Number.parseInt(value), {
    toClassOnly: true,
  }) //TODO: Handle cases with string, null and empty string as NAN
  id: number;
}
export { BoardGetOneItemRequestDto };
