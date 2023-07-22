import {
  BoardCreateRequestDto,
  BoardCreateResponseDto,
  BoardDeleteResponseDto,
  BoardDto,
  BoardGetAllItemsResponseDto,
  BoardGetOneItemRequestDto,
  BoardGetOneItemResponseDto,
  BoardUpdateRequestDto,
  BoardUpdateResponseDto,
} from '../../../src/packages/board/libs/dto/dto';

const expectToBeDefined = (dto: unknown) => {
  it('should be defined', () => {
    expect(dto).toBeDefined();
  });
};

const expectToExtendBoardDto = (dto: unknown) => {
  it('should extend BoardDto', () => {
    expect(dto).toBeInstanceOf(BoardDto);
  });
};

describe('BoardCreateRequestDto', () => {
  const boardCreateRequestDto = new BoardCreateRequestDto();
  expectToBeDefined(boardCreateRequestDto);

  it('should have a name property', () => {
    const dto = new BoardCreateRequestDto();
    dto.name = 'Pohemons';
    expect(dto).toHaveProperty('name');
  });
});

describe('BoardCreateResponseDto', () => {
  const boardCreateResponseDto = new BoardCreateResponseDto();
  expectToBeDefined(boardCreateResponseDto);
  expectToExtendBoardDto(boardCreateResponseDto);
});

describe('BoardDeleteResponseDto', () => {
  const boardDeleteResponseDto = new BoardDeleteResponseDto();
  expectToBeDefined(boardDeleteResponseDto);
  expectToExtendBoardDto(boardDeleteResponseDto);
});

describe('BoardGetAllItemsResponseDto', () => {
  const boardGetAllItemsResponseDto = new BoardGetAllItemsResponseDto();
  expectToBeDefined(boardGetAllItemsResponseDto);

  it('should extend BoardGetOneItemResponseDto', () => {
    const dto = new BoardGetAllItemsResponseDto();
    expect(dto).toBeInstanceOf(BoardGetOneItemResponseDto);
  });
});

describe('BoardGetOneItemResponseDto', () => {
  const boardGetOneItemResponseDto = new BoardGetOneItemResponseDto();
  expectToBeDefined(boardGetOneItemResponseDto);
  expectToExtendBoardDto(boardGetOneItemResponseDto);
});

describe('BoardGetOneItemRequestDto', () => {
  const boardGetOneItemRequestDto = new BoardGetOneItemRequestDto();
  expectToBeDefined(boardGetOneItemRequestDto);

  it('should have an id property', () => {
    const dto = new BoardGetOneItemRequestDto();
    dto.id = 1;
    expect(dto).toHaveProperty('id');
  });
});

describe('BoardUpdateRequestDto', () => {
  const boardUpdateRequestDto = new BoardUpdateRequestDto();
  expectToBeDefined(boardUpdateRequestDto);

  it('should have a name property', () => {
    const dto = new BoardUpdateRequestDto();
    dto.name = 'Pokemons';
    expect(dto).toHaveProperty('name');
  });
});

describe('BoardUpdateResponseDto', () => {
  const boardUpdateResponseDto = new BoardUpdateResponseDto();
  expectToBeDefined(boardUpdateResponseDto);
  expectToExtendBoardDto(boardUpdateResponseDto);
});
