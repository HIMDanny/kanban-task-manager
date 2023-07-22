import { faker } from '@faker-js/faker';

interface Board {
  name: string;
}

function createRandomBoard(): Board {
  return {
    name: faker.word.sample(),
  };
}

const boards: Board[] = Array.from({ length: 10 }, createRandomBoard);

export { boards };
