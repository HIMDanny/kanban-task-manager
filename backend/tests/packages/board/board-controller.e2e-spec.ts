// eslint-disable-next-line unicorn/prevent-abbreviations
import type { NestFastifyApplication } from '@nestjs/platform-fastify';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { Test } from '@nestjs/testing';

import { BoardModule } from '../../../src/packages/board/board.module';

describe('BoardController (e2e)', () => {
  let app: NestFastifyApplication;
  let boardId: number;

  const BOARD_ENDPOINT = '/boards';
  const NON_EXISTENT_BOARD_ID = 999;
  const testBoard = { name: 'Pohemons' };
  const updatedBoard = { name: 'Pokemons' };

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

  describe(`GET ${BOARD_ENDPOINT}`, () => {
    it('should return status 200 and boards', async () => {
      const response = await app.inject({
        method: 'GET',
        url: BOARD_ENDPOINT,
      });

      expect(response.statusCode).toEqual(200);
    });
  });

  describe(`POST ${BOARD_ENDPOINT}`, () => {
    it('should create a new board', async () => {
      const response = await app.inject({
        method: 'POST',
        url: BOARD_ENDPOINT,
        payload: testBoard,
      });

      expect(response.statusCode).toEqual(201);
      const createdBoard = JSON.parse(response.payload);
      boardId = createdBoard.id;
    });
  });

  describe(`GET ${BOARD_ENDPOINT}/:id`, () => {
    it('should return status 200 for a valid board', async () => {
      const response = await app.inject({
        method: 'GET',
        url: `${BOARD_ENDPOINT}/${boardId}`,
      });

      expect(response.statusCode).toEqual(200);
    });

    it('should return status 404 for a non-existent board', async () => {
      const response = await app.inject({
        method: 'GET',
        url: `${BOARD_ENDPOINT}/${NON_EXISTENT_BOARD_ID}`,
      });

      expect(response.statusCode).toEqual(404);
    });
  });

  describe(`PUT ${BOARD_ENDPOINT}/:id`, () => {
    it('should update the board', async () => {
      const response = await app.inject({
        method: 'PUT',
        url: `${BOARD_ENDPOINT}/${boardId}`,
        payload: updatedBoard,
      });

      expect(response.statusCode).toEqual(200);
    });
  });

  describe(`DELETE ${BOARD_ENDPOINT}/:id`, () => {
    it('should delete the board', async () => {
      const response = await app.inject({
        method: 'DELETE',
        url: `${BOARD_ENDPOINT}/${boardId}`,
      });

      expect(response.statusCode).toEqual(200);
    });
  });
});
