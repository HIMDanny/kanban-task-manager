import { Injectable } from '@nestjs/common';
import type { Prisma, Task } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
class TaskRepository {
  constructor(private prisma: PrismaService) {}

  async findTask(
    TaskWhereUniqueInput: Prisma.TaskWhereUniqueInput,
  ): Promise<Task | null> {
    return this.prisma.task.findUnique({
      where: TaskWhereUniqueInput,
    });
  }

  async findTasks(parameters: {
    cursor?: Prisma.TaskWhereUniqueInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput;
    skip?: number;
    take?: number;
    where?: Prisma.TaskWhereInput;
  }): Promise<Task[]> {
    const { skip, take, cursor, where, orderBy } = parameters;
    return this.prisma.task.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createTask(data: Prisma.TaskCreateInput): Promise<Task> {
    return this.prisma.task.create({
      data,
    });
  }

  async updateTask(parameters: {
    data: Prisma.TaskUpdateInput;
    where: Prisma.TaskWhereUniqueInput;
  }): Promise<Task> {
    const { where, data } = parameters;
    return this.prisma.task.update({
      data,
      where,
    });
  }

  async deleteTask(where: Prisma.TaskWhereUniqueInput): Promise<Task> {
    return this.prisma.task.delete({
      where,
    });
  }
}

export { TaskRepository };
