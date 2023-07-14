import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import type { Task } from '@prisma/client';

import { mapToDto } from '../libs/helpers/maps/map-to-dto/map-to-dto';
import type {
  TaskCreateRequestDto,
  TaskCreateResponseDto,
  TaskDeleteResponseDto,
  TaskGetAllItemsResponseDto,
  TaskGetOneItemRequestDto,
  TaskGetOneItemResponseDto,
  TaskUpdateRequestDto,
  TaskUpdateResponseDto,
} from './libs/dto/dto';
import { TaskRepository } from './task.repository';

@Injectable()
class TaskService {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly logger: Logger,
  ) {}

  async findTask(
    taskWhereUniqueInput: TaskGetOneItemRequestDto,
  ): Promise<TaskGetOneItemResponseDto | null> {
    const task = await this.taskRepository.findTask(taskWhereUniqueInput);
    if (task) {
      this.logger.log(`Found task with ID ${task.id}`, { task });
      return mapToDto<Task, TaskGetOneItemResponseDto>(task);
    }
    throw new NotFoundException('Task not found');
  }

  async findTasks(): Promise<TaskGetAllItemsResponseDto[]> {
    const tasks = await this.taskRepository.findTasks({});
    this.logger.log(`Retrieved ${tasks.length} tasks`, { tasks });
    return tasks.map((Task) =>
      mapToDto<Task, TaskGetAllItemsResponseDto>(Task),
    );
  }

  async createTask(data: TaskCreateRequestDto): Promise<TaskCreateResponseDto> {
    const createdTask = await this.taskRepository.createTask(data);
    this.logger.log(`Created task with ID ${createdTask.id}`, {
      createdTask,
    });
    return mapToDto<Task, TaskCreateResponseDto>(createdTask);
  }

  async updateTask(parameters: {
    data: TaskUpdateRequestDto;
    where: TaskGetOneItemRequestDto;
  }): Promise<TaskUpdateResponseDto> {
    const updatedTask = await this.taskRepository.updateTask(parameters);
    this.logger.log(`Updated task with ID ${updatedTask.id}`, {
      updatedTask,
    });
    return mapToDto<Task, TaskUpdateResponseDto>(updatedTask);
  }

  async deleteTask(
    where: TaskGetOneItemRequestDto,
  ): Promise<TaskDeleteResponseDto> {
    const deletedTask = await this.taskRepository.deleteTask(where);
    this.logger.log(`Deleted task with ID ${deletedTask.id}`, {
      deletedTask,
    });
    return mapToDto<Task, TaskDeleteResponseDto>(deletedTask);
  }
}

export { TaskService };
