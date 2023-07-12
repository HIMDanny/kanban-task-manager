import { Logger, Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { ColumnController } from './column.controller';
import { ColumnRepository } from './column.repository';
import { ColumnService } from './column.service';

@Module({
  imports: [PrismaModule],
  controllers: [ColumnController],
  providers: [ColumnService, ColumnRepository, Logger],
  exports: [ColumnService, ColumnRepository],
})
export class ColumnModule {}
