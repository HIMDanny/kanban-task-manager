import type { Board } from '@prisma/client';

import type { BoardDto } from '../../dto/board.dto';

const mapToDto = (board: Board): BoardDto => {
  const boardDto: BoardDto = {
    id: board.id,
    name: board.name,
    createdAt: board.createdAt,
    updatedAt: board.updatedAt,
  };
  return boardDto;
};

export { mapToDto };
