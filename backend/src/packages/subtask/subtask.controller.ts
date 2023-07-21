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
import type {
  SubtaskCreateResponseDto,
  SubtaskDeleteResponseDto,
  SubtaskGetAllItemsResponseDto,
  SubtaskGetOneItemResponseDto,
  SubtaskUpdateResponseDto,
} from './libs/dto/dto';
import {
  SubtaskCreateRequestDto,
  SubtaskUpdateRequestDto,
} from './libs/dto/dto';
import {
  SubtaskCreateSchema,
  SubtaskUpdateSchema,
  SubtaskValidateParametersSchema,
} from './libs/validation-schemas/validation-schemas';
import { SubtaskService } from './subtask.service';

@Controller('subtasks')
class SubtaskController {
  constructor(private readonly subtaskService: SubtaskService) {}

  @Get()
  async getSubtasks(): Promise<SubtaskGetAllItemsResponseDto[]> {
    return this.subtaskService.findSubtasks();
  }

  @Get(':id')
  async getSubtaskById(
    @Param(
      'id',
      ParseIntPipe,
      new ZodValidationPipe(SubtaskValidateParametersSchema),
    )
    id: number,
  ): Promise<SubtaskGetOneItemResponseDto | null> {
    return this.subtaskService.findSubtask({ id });
  }

  @Post()
  async createSubtask(
    @Body(new ZodValidationPipe(SubtaskCreateSchema))
    parameters: SubtaskCreateRequestDto,
  ): Promise<SubtaskCreateResponseDto> {
    return this.subtaskService.createSubtask(parameters);
  }

  @Put(':id')
  async updateSubtask(
    @Param(
      'id',
      ParseIntPipe,
      new ZodValidationPipe(SubtaskValidateParametersSchema),
    )
    id: number,
    @Body(new ZodValidationPipe(SubtaskUpdateSchema))
    { title }: SubtaskUpdateRequestDto,
  ): Promise<SubtaskUpdateResponseDto> {
    return this.subtaskService.updateSubtask({
      where: { id },
      data: { title },
    });
  }

  @Delete(':id')
  async deleteSubtask(
    @Param(
      'id',
      ParseIntPipe,
      new ZodValidationPipe(SubtaskValidateParametersSchema),
    )
    id: number,
  ): Promise<SubtaskDeleteResponseDto> {
    return this.subtaskService.deleteSubtask({ id });
  }
}

export { SubtaskController };
