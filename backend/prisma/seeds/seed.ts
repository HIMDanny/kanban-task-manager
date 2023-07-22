import { PrismaClient } from '@prisma/client';

import { boards } from '../seeds/data/boards';

const prisma = new PrismaClient();

async function runSeeders() {
  await Promise.all(
    boards.map(async (board) => prisma.board.create({ data: board })),
  );
}

runSeeders()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async () => {
    await prisma.$disconnect();
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1);
  });
