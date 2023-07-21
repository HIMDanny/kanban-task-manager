// eslint-disable-next-line unicorn/prevent-abbreviations
import type { NestFastifyApplication } from '@nestjs/platform-fastify';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { Test } from '@nestjs/testing';

import { BoardModule } from '../../../src/packages/board/board.module';

describe('BoardController (e2e)', () => {
  let app: NestFastifyApplication;
  let boardId: number;

  beforeAll(async () => {
    const moduleReference = await Test.createTestingModule({
      imports: [BoardModule],
    }).compile();

    app = moduleReference.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );

    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/boards (GET)', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/boards',
    });

    expect(response.statusCode).toEqual(200);
    expect(response.payload).toEqual(response.body);
  });

  it('/boards (POST)', async () => {
    const requestBody = { name: 'Pohemons' };
    const response = await app.inject({
      method: 'POST',
      url: '/boards',
      payload: requestBody,
    });

    expect(response.statusCode).toEqual(201);
    const createdBoard = JSON.parse(response.body);
    boardId = createdBoard.id;
  });

  it('/boards/:id (GET)', async () => {
    const response = await app.inject({
      method: 'GET',
      url: `/boards/${boardId}`,
    });

    expect(response.statusCode).toEqual(200);
  });

  it('/boards/:id (PUT)', async () => {
    const requestBody = { name: 'Pokemons' };
    const response = await app.inject({
      method: 'PUT',
      url: `/boards/${boardId}`,
      payload: requestBody,
    });

    expect(response.statusCode).toEqual(200);
  });

  it('/boards/:id (DELETE)', async () => {
    const response = await app.inject({
      method: 'DELETE',
      url: `/boards/${boardId}`,
    });

    expect(response.statusCode).toEqual(200);
  });
});
