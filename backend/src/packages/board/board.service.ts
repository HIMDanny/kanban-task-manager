import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import type { Board } from '@prisma/client';

import { mapToDto } from '../libs/helpers/maps/map-to-dto/map-to-dto';
import { BoardRepository } from './board.repository';
import type {
  BoardCreateRequestDto,
  BoardCreateResponseDto,
  BoardDeleteResponseDto,
  BoardGetAllItemsResponseDto,
  BoardGetOneItemRequestDto,
  BoardGetOneItemResponseDto,
  BoardUpdateRequestDto,
  BoardUpdateResponseDto,
} from './libs/dto/dto';

@Injectable()
class BoardService {
  constructor(
    private readonly boardRepository: BoardRepository,
    private readonly logger: Logger,
  ) {}

  async findBoard(
    boardWhereUniqueInput: BoardGetOneItemRequestDto,
  ): Promise<BoardGetOneItemResponseDto | null> {
    const board = await this.boardRepository.findBoard(boardWhereUniqueInput);
    if (board) {
      this.logger.log(`Found board with ID ${board.id}`, { board });
      return mapToDto<Board, BoardGetOneItemResponseDto>(board);
    }
    throw new NotFoundException('Board not found');
  }

  async findBoards(): Promise<BoardGetAllItemsResponseDto[]> {
    const boards = await this.boardRepository.findBoards({});
    this.logger.log(`Retrieved ${boards.length} boards`, { boards });
    return boards.map((board) =>
      mapToDto<Board, BoardGetAllItemsResponseDto>(board),
    );
  }

  async createBoard(
    data: BoardCreateRequestDto,
  ): Promise<BoardCreateResponseDto> {
    const createdBoard = await this.boardRepository.createBoard(data);
    this.logger.log(`Created board with ID ${createdBoard.id}`, {
      createdBoard,
    });
    return mapToDto<Board, BoardCreateResponseDto>(createdBoard);
  }

  async updateBoard(parameters: {
    data: BoardUpdateRequestDto;
    where: BoardGetOneItemRequestDto;
  }): Promise<BoardUpdateResponseDto> {
    const updatedBoard = await this.boardRepository.updateBoard(parameters);
    this.logger.log(`Updated board with ID ${updatedBoard.id}`, {
      updatedBoard,
    });
    return mapToDto<Board, BoardUpdateResponseDto>(updatedBoard);
  }

  async deleteBoard(
    where: BoardGetOneItemRequestDto,
  ): Promise<BoardDeleteResponseDto> {
    const deletedBoard = await this.boardRepository.deleteBoard(where);
    this.logger.log(`Deleted board with ID ${deletedBoard.id}`, {
      deletedBoard,
    });
    return mapToDto<Board, BoardDeleteResponseDto>(deletedBoard);
  }
}

export { BoardService };
