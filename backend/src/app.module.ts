import { Module } from '@nestjs/common';

// eslint-disable-next-line import/extensions
import { AppController } from './app.controller';
// eslint-disable-next-line import/extensions
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
// eslint-disable-next-line no-restricted-syntax
export class AppModule {}
