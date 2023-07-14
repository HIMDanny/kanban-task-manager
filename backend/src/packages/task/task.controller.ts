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
  TaskCreateResponseDto,
  TaskDeleteResponseDto,
  TaskGetAllItemsResponseDto,
  TaskGetOneItemResponseDto,
  TaskUpdateResponseDto,
} from './libs/dto/dto';
import { TaskCreateRequestDto, TaskUpdateRequestDto } from './libs/dto/dto';
import {
  TaskCreateSchema,
  TaskUpdateSchema,
  TaskValidateParametersSchema,
} from './libs/validation-schemas/validation-schemas';
import { TaskService } from './task.service';

@Controller('tasks')
class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getTasks(): Promise<TaskGetAllItemsResponseDto[]> {
    return this.taskService.findTasks();
  }

  @Get(':id')
  async getTaskById(
    @Param(
      'id',
      ParseIntPipe,
      new ZodValidationPipe(TaskValidateParametersSchema),
    )
    id: number,
  ): Promise<TaskGetOneItemResponseDto | null> {
    return this.taskService.findTask({ id });
  }

  @Post()
  async createTask(
    @Body(new ZodValidationPipe(TaskCreateSchema))
    parameters: TaskCreateRequestDto,
  ): Promise<TaskCreateResponseDto> {
    return this.taskService.createTask(parameters);
  }

  @Put(':id')
  async updateTask(
    @Param(
      'id',
      ParseIntPipe,
      new ZodValidationPipe(TaskValidateParametersSchema),
    )
    id: number,
    @Body(new ZodValidationPipe(TaskUpdateSchema))
    { title, description }: TaskUpdateRequestDto,
  ): Promise<TaskUpdateResponseDto> {
    return this.taskService.updateTask({
      where: { id },
      data: { title, description },
    });
  }

  @Delete(':id')
  async deleteTask(
    @Param(
      'id',
      ParseIntPipe,
      new ZodValidationPipe(TaskValidateParametersSchema),
    )
    id: number,
  ): Promise<TaskDeleteResponseDto> {
    return this.taskService.deleteTask({ id });
  }
}

export { TaskController };
