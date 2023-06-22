import { Controller, Get } from '@nestjs/common';

// eslint-disable-next-line import/extensions
import { AppService } from './app.service';

@Controller()
// eslint-disable-next-line no-restricted-syntax
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
