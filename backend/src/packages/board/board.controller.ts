import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

import { ZodValidationPipe } from '../libs/helpers/pipes/zod-validation.pipe';
import { BoardService } from './board.service';
import type {
  BoardCreateResponseDto,
  BoardDeleteResponseDto,
  BoardGetAllItemsResponseDto,
  BoardGetOneItemResponseDto,
  BoardUpdateResponseDto,
} from './libs/dto/dto';
import { BoardCreateRequestDto, BoardUpdateRequestDto } from './libs/dto/dto';
import {
  BoardCreateSchema,
  BoardUpdateSchema,
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
  async getBoardById(
    @Param(
      'id',
      ParseIntPipe,
      new ZodValidationPipe(BoardValidateParametersSchema),
    )
    id: number,
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
  async updateBoard(
    @Param(
      'id',
      ParseIntPipe,
      new ZodValidationPipe(BoardValidateParametersSchema),
    )
    id: number,
    @Body(new ZodValidationPipe(BoardUpdateSchema))
    { name }: BoardUpdateRequestDto,
  ): Promise<BoardUpdateResponseDto> {
    return this.boardService.updateBoard({
      where: { id },
      data: { name },
    });
  }

  @Delete(':id')
  async deleteBoard(
    @Param(
      'id',
      ParseIntPipe,
      new ZodValidationPipe(BoardValidateParametersSchema),
    )
    id: number,
  ): Promise<BoardDeleteResponseDto> {
    return this.boardService.deleteBoard({ id });
  }
}

export { BoardController };
