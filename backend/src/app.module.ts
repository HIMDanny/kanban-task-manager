import { Module } from '@nestjs/common';

import { BoardModule } from './packages/board/board.module';
import { PrismaModule } from './packages/prisma/prisma.module';

@Module({
  imports: [BoardModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
