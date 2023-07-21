import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import type { Subtask } from '@prisma/client';

import { mapToDto } from '../libs/helpers/maps/map-to-dto/map-to-dto';
import type {
  SubtaskCreateRequestDto,
  SubtaskCreateResponseDto,
  SubtaskDeleteResponseDto,
  SubtaskGetAllItemsResponseDto,
  SubtaskGetOneItemRequestDto,
  SubtaskGetOneItemResponseDto,
  SubtaskUpdateRequestDto,
  SubtaskUpdateResponseDto,
} from './libs/dto/dto';
import { SubtaskRepository } from './subtask.repository';

@Injectable()
class SubtaskService {
  constructor(
    private readonly subtaskRepository: SubtaskRepository,
    private readonly logger: Logger,
  ) {}

  async findSubtask(
    SubtaskWhereUniqueInput: SubtaskGetOneItemRequestDto,
  ): Promise<SubtaskGetOneItemResponseDto | null> {
    const subtask = await this.subtaskRepository.findSubtask(
      SubtaskWhereUniqueInput,
    );
    if (subtask) {
      this.logger.log(`Found Subtask with ID ${subtask.id}`, { subtask });
      return mapToDto<Subtask, SubtaskGetOneItemResponseDto>(subtask);
    }
    throw new NotFoundException('Subtask not found');
  }

  async findSubtasks(): Promise<SubtaskGetAllItemsResponseDto[]> {
    const subtasks = await this.subtaskRepository.findSubtasks({});
    this.logger.log(`Retrieved ${subtasks.length} subtasks`, { subtasks });
    return subtasks.map((subtask) =>
      mapToDto<Subtask, SubtaskGetAllItemsResponseDto>(subtask),
    );
  }

  async createSubtask(
    data: SubtaskCreateRequestDto,
  ): Promise<SubtaskCreateResponseDto> {
    const { title, taskId } = data;
    const createdSubtask = await this.subtaskRepository.createSubtask({
      title,
      task: { connect: { id: taskId } },
    });
    this.logger.log(`Created subtask with ID ${createdSubtask.id}`, {
      createdSubtask,
    });
    return mapToDto<Subtask, SubtaskCreateResponseDto>(createdSubtask);
  }

  async updateSubtask(parameters: {
    data: SubtaskUpdateRequestDto;
    where: SubtaskGetOneItemRequestDto;
  }): Promise<SubtaskUpdateResponseDto> {
    const updatedSubtask = await this.subtaskRepository.updateSubtask(
      parameters,
    );
    this.logger.log(`Updated subtask with ID ${updatedSubtask.id}`, {
      updatedSubtask,
    });
    return mapToDto<Subtask, SubtaskUpdateResponseDto>(updatedSubtask);
  }

  async deleteSubtask(
    where: SubtaskGetOneItemRequestDto,
  ): Promise<SubtaskDeleteResponseDto> {
    const deletedSubtask = await this.subtaskRepository.deleteSubtask(where);
    this.logger.log(`Deleted subtask with ID ${deletedSubtask.id}`, {
      deletedSubtask,
    });
    return mapToDto<Subtask, SubtaskDeleteResponseDto>(deletedSubtask);
  }
}

export { SubtaskService };
