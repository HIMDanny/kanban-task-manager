import { Logger, Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { SubtaskController } from './subtask.controller';
import { SubtaskRepository } from './subtask.repository';
import { SubtaskService } from './subtask.service';

@Module({
  imports: [PrismaModule],
  controllers: [SubtaskController],
  providers: [SubtaskService, SubtaskRepository, Logger],
  exports: [SubtaskService, SubtaskRepository],
})
export class SubtaskModule {}
