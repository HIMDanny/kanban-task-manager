import { Logger, Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { BoardController } from './board.controller';
import { BoardRepository } from './board.repository';
import { BoardService } from './board.service';

@Module({
  imports: [PrismaModule],
  controllers: [BoardController],
  providers: [BoardService, BoardRepository, Logger],
  exports: [BoardService, BoardRepository],
})
export class BoardModule {}
