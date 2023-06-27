import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { BoardService } from './board.service';
import type {
  BoardCreateResponseDto,
  BoardDeleteResponseDto,
  BoardGetAllItemsResponseDto,
  BoardGetOneItemResponseDto,
  BoardUpdateResponseDto,
} from './libs/dto/dto';
import {
  BoardCreateRequestDto,
  BoardGetOneItemRequestDto,
  BoardUpdateRequestDto,
} from './libs/dto/dto';
import { ZodValidationPipe } from './libs/helpers/pipes/pipes';
import {
  BoardCreateSchema,
  BoardUpdateBodySchema,
  BoardValidateParametersSchema,
} from './libs/validation-schemas/validation-schemas';

@Controller('boards')
class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  async getBoards(): Promise<BoardGetAllItemsResponseDto[]> {
    return this.boardService.findBoards();
  }

  @Get(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getBoardById(
    @Param(new ZodValidationPipe(BoardValidateParametersSchema))
    { id }: BoardGetOneItemRequestDto,
  ): Promise<BoardGetOneItemResponseDto | null> {
    return this.boardService.findBoard({ id });
  }

  @Post()
  async createBoard(
    @Body(new ZodValidationPipe(BoardCreateSchema))
    { name }: BoardCreateRequestDto,
  ): Promise<BoardCreateResponseDto> {
    return this.boardService.createBoard({
      name,
    });
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateBoard(
    @Param(new ZodValidationPipe(BoardValidateParametersSchema))
    { id }: BoardGetOneItemRequestDto,
    @Body(new ZodValidationPipe(BoardUpdateBodySchema))
    { name }: BoardUpdateRequestDto,
  ): Promise<BoardUpdateResponseDto> {
    return this.boardService.updateBoard({
      where: { id },
      data: { name },
    });
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async deleteBoard(
    @Param(new ZodValidationPipe(BoardValidateParametersSchema))
    { id }: BoardGetOneItemRequestDto,
  ): Promise<BoardDeleteResponseDto> {
    return this.boardService.deleteBoard({ id });
  }
}

export { BoardController };
