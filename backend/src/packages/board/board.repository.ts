import { Injectable } from '@nestjs/common';
import type { Board, Prisma } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
class BoardRepository {
  constructor(private prisma: PrismaService) {}

  async findBoard(
    boardWhereUniqueInput: Prisma.BoardWhereUniqueInput,
  ): Promise<Board | null> {
    return this.prisma.board.findUnique({
      where: boardWhereUniqueInput,
    });
  }

  async findBoards(parameters: {
    cursor?: Prisma.BoardWhereUniqueInput;
    orderBy?: Prisma.BoardOrderByWithRelationInput;
    skip?: number;
    take?: number;
    where?: Prisma.BoardWhereInput;
  }): Promise<Board[]> {
    const { skip, take, cursor, where, orderBy } = parameters;
    return this.prisma.board.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createBoard(data: Prisma.BoardCreateInput): Promise<Board> {
    return this.prisma.board.create({
      data,
    });
  }

  async updateBoard(parameters: {
    data: Prisma.BoardUpdateInput;
    where: Prisma.BoardWhereUniqueInput;
  }): Promise<Board> {
    const { where, data } = parameters;
    return this.prisma.board.update({
      data,
      where,
    });
  }

  async deleteBoard(where: Prisma.BoardWhereUniqueInput): Promise<Board> {
    return this.prisma.board.delete({
      where,
    });
  }
}

export { BoardRepository };
