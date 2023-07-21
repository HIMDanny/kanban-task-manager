import { Injectable } from '@nestjs/common';
import type { Prisma, Subtask } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
class SubtaskRepository {
  constructor(private prisma: PrismaService) {}

  async findSubtask(
    SubtaskWhereUniqueInput: Prisma.SubtaskWhereUniqueInput,
  ): Promise<Subtask | null> {
    return this.prisma.subtask.findUnique({
      where: SubtaskWhereUniqueInput,
    });
  }

  async findSubtasks(parameters: {
    cursor?: Prisma.SubtaskWhereUniqueInput;
    orderBy?: Prisma.SubtaskOrderByWithRelationInput;
    skip?: number;
    take?: number;
    where?: Prisma.SubtaskWhereInput;
  }): Promise<Subtask[]> {
    const { skip, take, cursor, where, orderBy } = parameters;
    return this.prisma.subtask.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createSubtask(data: Prisma.SubtaskCreateInput): Promise<Subtask> {
    return this.prisma.subtask.create({
      data,
    });
  }

  async updateSubtask(parameters: {
    data: Prisma.SubtaskUpdateInput;
    where: Prisma.SubtaskWhereUniqueInput;
  }): Promise<Subtask> {
    const { where, data } = parameters;
    return this.prisma.subtask.update({
      data,
      where,
    });
  }

  async deleteSubtask(where: Prisma.SubtaskWhereUniqueInput): Promise<Subtask> {
    return this.prisma.subtask.delete({
      where,
    });
  }
}

export { SubtaskRepository };
