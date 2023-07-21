import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';

import { BoardModule } from './packages/board/board.module';
import { ColumnModule } from './packages/column/column.module';
import { PrismaModule } from './packages/prisma/prisma.module';
import { TaskModule } from './packages/task/task.module';

@Module({
  imports: [
    BoardModule,
    ColumnModule,
    TaskModule,
    PrismaModule,
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            levelFirst: true,
            translateTime: 'UTC:yyyy-mm-dd HH:MM:ss.l o',
          },
        },
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
