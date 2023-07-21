import type { NestFastifyApplication } from '@nestjs/platform-fastify';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { Test } from '@nestjs/testing';

import { PrismaService } from '../../../src/packages/prisma/prisma.service';

describe('PrismaService', () => {
  let prismaService: PrismaService;
  let app: NestFastifyApplication;

  beforeAll(async () => {
    const moduleReference = await Test.createTestingModule({
      providers: [PrismaService],
    })
      .overrideProvider(FastifyAdapter)
      .useValue(new FastifyAdapter())
      .compile();

    prismaService = moduleReference.get<PrismaService>(PrismaService);

    app = moduleReference.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );

    await app.init();
    await app.getHttpAdapter().getInstance().ready();
    await prismaService.onModuleInit();
    await prismaService.enableShutdownHooks(app);
  });

  afterAll(async () => {
    process.emit('beforeExit', 0);
    await app.close();
  });

  it('should be defined', () => {
    expect(prismaService).toBeDefined();
  });
});
