import { Injectable } from '@nestjs/common';

import type {
  BoardCreateRequestDto,
  BoardCreateResponseDto,
  BoardDeleteResponseDto,
  BoardGetAllItemsResponseDto,
  BoardGetOneItemRequestDto,
  BoardGetOneItemResponseDto,
  BoardUpdateRequestDto,
  BoardUpdateResponseDto,
} from '../libs/dto/dto';
import { mapToDto } from '../libs/helpers/maps/map-to-dto';
import { BoardRepository } from './board.repository';

@Injectable()
class BoardService {
  constructor(private readonly boardRepository: BoardRepository) {}

  async findBoard(
    boardWhereUniqueInput: BoardGetOneItemRequestDto,
  ): Promise<BoardGetOneItemResponseDto | null> {
    const board = await this.boardRepository.findBoard(boardWhereUniqueInput);
    if (board) {
      return mapToDto(board);
    }
    return null;
  }

  async findBoards(): Promise<BoardGetAllItemsResponseDto[]> {
    const boards = await this.boardRepository.findBoards({});
    return boards.map((board) => mapToDto(board));
  }

  async createBoard(
    data: BoardCreateRequestDto,
  ): Promise<BoardCreateResponseDto> {
    const createdBoard = await this.boardRepository.createBoard(data);
    return mapToDto(createdBoard);
  }

  async updateBoard(parameters: {
    data: BoardUpdateRequestDto;
    where: BoardGetOneItemRequestDto;
  }): Promise<BoardUpdateResponseDto> {
    const updatedBoard = await this.boardRepository.updateBoard(parameters);
    return mapToDto(updatedBoard);
  }

  async deleteBoard(
    where: BoardGetOneItemRequestDto,
  ): Promise<BoardDeleteResponseDto> {
    const deletedBoard = await this.boardRepository.deleteBoard(where);
    return mapToDto(deletedBoard);
  }
}

export { BoardService };
