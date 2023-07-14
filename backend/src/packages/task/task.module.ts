import { Logger, Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { TaskController } from './task.controller';
import { TaskRepository } from './task.repository';
import { TaskService } from './task.service';

@Module({
  imports: [PrismaModule],
  controllers: [TaskController],
  providers: [TaskService, TaskRepository, Logger],
  exports: [TaskService, TaskRepository],
})
export class TaskModule {}
