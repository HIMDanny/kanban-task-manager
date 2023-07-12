import { Injectable } from '@nestjs/common';
import type { Column, Prisma } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
class ColumnRepository {
  constructor(private prisma: PrismaService) {}

  async findColumn(
    ColumnWhereUniqueInput: Prisma.ColumnWhereUniqueInput,
  ): Promise<Column | null> {
    return this.prisma.column.findUnique({
      where: ColumnWhereUniqueInput,
    });
  }

  async findColumns(parameters: {
    cursor?: Prisma.ColumnWhereUniqueInput;
    orderBy?: Prisma.ColumnOrderByWithRelationInput;
    skip?: number;
    take?: number;
    where?: Prisma.ColumnWhereInput;
  }): Promise<Column[]> {
    const { skip, take, cursor, where, orderBy } = parameters;
    return this.prisma.column.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createColumn(data: Prisma.ColumnCreateInput): Promise<Column> {
    return this.prisma.column.create({
      data,
    });
  }

  async updateColumn(parameters: {
    data: Prisma.ColumnUpdateInput;
    where: Prisma.ColumnWhereUniqueInput;
  }): Promise<Column> {
    const { where, data } = parameters;
    return this.prisma.column.update({
      data,
      where,
    });
  }

  async deleteColumn(where: Prisma.ColumnWhereUniqueInput): Promise<Column> {
    return this.prisma.column.delete({
      where,
    });
  }
}

export { ColumnRepository };
