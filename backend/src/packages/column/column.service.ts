import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import type { Column } from '@prisma/client';

import { mapToDto } from '../libs/helpers/maps/map-to-dto/map-to-dto';
import { ColumnRepository } from './column.repository';
import type {
  ColumnCreateRequestDto,
  ColumnCreateResponseDto,
  ColumnDeleteResponseDto,
  ColumnGetAllItemsResponseDto,
  ColumnGetOneItemRequestDto,
  ColumnGetOneItemResponseDto,
  ColumnUpdateRequestDto,
  ColumnUpdateResponseDto,
} from './libs/dto/dto';

@Injectable()
class ColumnService {
  constructor(
    private readonly columnRepository: ColumnRepository,
    private readonly logger: Logger,
  ) {}

  async findColumn(
    ColumnWhereUniqueInput: ColumnGetOneItemRequestDto,
  ): Promise<ColumnGetOneItemResponseDto | null> {
    const column = await this.columnRepository.findColumn(
      ColumnWhereUniqueInput,
    );
    if (column) {
      this.logger.log(`Found column with ID ${column.id}`, { column });
      return mapToDto<Column, ColumnGetOneItemResponseDto>(column);
    }
    throw new NotFoundException('Column not found');
  }

  async findColumns(): Promise<ColumnGetAllItemsResponseDto[]> {
    const columns = await this.columnRepository.findColumns({});
    this.logger.log(`Retrieved ${columns.length} columns`, { columns });
    return columns.map((column) =>
      mapToDto<Column, ColumnGetAllItemsResponseDto>(column),
    );
  }

  async createColumn(
    data: ColumnCreateRequestDto,
  ): Promise<ColumnCreateResponseDto> {
    const { color, name, boardId } = data;
    const createdColumn = await this.columnRepository.createColumn({
      name,
      color: Buffer.from(JSON.stringify(color)),
      board: { connect: { id: boardId } },
    });
    this.logger.log(`Created column with ID ${createdColumn.id}`, {
      createdColumn,
    });
    return mapToDto<Column, ColumnCreateResponseDto>(createdColumn);
  }

  async updateColumn(parameters: {
    data: ColumnUpdateRequestDto;
    where: ColumnGetOneItemRequestDto;
  }): Promise<ColumnUpdateResponseDto> {
    const { data, where } = parameters;
    const updatedColumn = await this.columnRepository.updateColumn({
      data: {
        name: data.name,
        color: data.color ? Buffer.from(JSON.stringify(data.color)) : undefined,
      },
      where: {
        id: where.id,
      },
    });
    this.logger.log(`Updated column with ID ${updatedColumn.id}`, {
      updatedColumn,
    });
    return mapToDto<Column, ColumnUpdateResponseDto>(updatedColumn);
  }

  async deleteColumn(
    where: ColumnGetOneItemRequestDto,
  ): Promise<ColumnDeleteResponseDto> {
    const deletedColumn = await this.columnRepository.deleteColumn(where);
    this.logger.log(`Deleted column with ID ${deletedColumn.id}`, {
      deletedColumn,
    });
    return mapToDto<Column, ColumnDeleteResponseDto>(deletedColumn);
  }
}

export { ColumnService };
