import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

import { ZodValidationPipe } from '../libs/helpers/pipes/zod-validation.pipe';
import { ColumnService } from './column.service';
import type {
  ColumnCreateResponseDto,
  ColumnDeleteResponseDto,
  ColumnGetAllItemsResponseDto,
  ColumnGetOneItemResponseDto,
  ColumnUpdateResponseDto,
} from './libs/dto/dto';
import { ColumnCreateRequestDto, ColumnUpdateRequestDto } from './libs/dto/dto';
import {
  ColumnCreateSchema,
  ColumnUpdateBodySchema,
  ColumnValidateParametersSchema,
} from './libs/validation-schemas/validation-schemas';

@Controller('columns')
class ColumnController {
  constructor(private readonly columnService: ColumnService) {}

  @Get()
  async getColumns(): Promise<ColumnGetAllItemsResponseDto[]> {
    return this.columnService.findColumns();
  }

  @Get(':id')
  async getColumnById(
    @Param(
      'id',
      ParseIntPipe,
      new ZodValidationPipe(ColumnValidateParametersSchema),
    )
    id: number,
  ): Promise<ColumnGetOneItemResponseDto | null> {
    return this.columnService.findColumn({ id });
  }

  @Post()
  async createColumn(
    @Body(new ZodValidationPipe(ColumnCreateSchema))
    { name, color }: ColumnCreateRequestDto,
  ): Promise<ColumnCreateResponseDto> {
    return this.columnService.createColumn({
      name,
      color,
    });
  }

  @Put(':id')
  async updateColumn(
    @Param(
      'id',
      ParseIntPipe,
      new ZodValidationPipe(ColumnValidateParametersSchema),
    )
    id: number,
    @Body(new ZodValidationPipe(ColumnUpdateBodySchema))
    { name, color }: ColumnUpdateRequestDto,
  ): Promise<ColumnUpdateResponseDto> {
    return this.columnService.updateColumn({
      where: { id },
      data: { name, color },
    });
  }

  @Delete(':id')
  async deleteColumn(
    @Param(
      'id',
      ParseIntPipe,
      new ZodValidationPipe(ColumnValidateParametersSchema),
    )
    id: number,
  ): Promise<ColumnDeleteResponseDto> {
    return this.columnService.deleteColumn({ id });
  }
}

export { ColumnController };
