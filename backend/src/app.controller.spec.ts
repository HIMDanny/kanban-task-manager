import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';

// eslint-disable-next-line import/extensions
import { AppController } from './app.controller';
// eslint-disable-next-line import/extensions
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
