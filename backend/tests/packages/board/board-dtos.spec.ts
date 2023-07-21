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

describe('BoardCreateRequestDto', () => {
  // eslint-disable-next-line sonarjs/no-duplicate-string
  it('should be defined', () => {
    const dto = new BoardCreateRequestDto();
    expect(dto).toBeDefined();
  });

  it('should have a name property', () => {
    const dto = new BoardCreateRequestDto();
    expect(dto).toHaveProperty('name');
  });
});

describe('BoardCreateResponseDto', () => {
  it('should be defined', () => {
    const dto = new BoardCreateResponseDto();
    expect(dto).toBeDefined();
  });

  // eslint-disable-next-line sonarjs/no-duplicate-string
  it('should extend BoardDto', () => {
    const dto = new BoardCreateResponseDto();
    expect(dto).toBeInstanceOf(BoardDto);
  });
});

describe('BoardDeleteResponseDto', () => {
  it('should be defined', () => {
    const dto = new BoardDeleteResponseDto();
    expect(dto).toBeDefined();
  });

  it('should extend BoardDto', () => {
    const dto = new BoardDeleteResponseDto();
    expect(dto).toBeInstanceOf(BoardDto);
  });
});

describe('BoardGetAllItemsResponseDto', () => {
  it('should be defined', () => {
    const dto = new BoardGetAllItemsResponseDto();
    expect(dto).toBeDefined();
  });

  it('should extend BoardGetOneItemResponseDto', () => {
    const dto = new BoardGetAllItemsResponseDto();
    expect(dto).toBeInstanceOf(BoardGetOneItemResponseDto);
  });
});

describe('BoardGetOneItemResponseDto', () => {
  it('should be defined', () => {
    const dto = new BoardGetOneItemResponseDto();
    expect(dto).toBeDefined();
  });

  it('should extend BoardDto', () => {
    const dto = new BoardGetOneItemResponseDto();
    expect(dto).toBeInstanceOf(BoardDto);
  });
});

describe('BoardGetOneItemRequestDto', () => {
  it('should be defined', () => {
    const dto = new BoardGetOneItemRequestDto();
    expect(dto).toBeDefined();
  });

  it('should have an id property', () => {
    const dto = new BoardGetOneItemRequestDto();
    expect(dto).toHaveProperty('id');
  });
});

describe('BoardUpdateRequestDto', () => {
  it('should be defined', () => {
    const dto = new BoardUpdateRequestDto();
    expect(dto).toBeDefined();
  });

  it('should have a name property', () => {
    const dto = new BoardUpdateRequestDto();
    expect(dto).toHaveProperty('name');
  });
});

describe('BoardUpdateResponseDto', () => {
  it('should be defined', () => {
    const dto = new BoardUpdateResponseDto();
    expect(dto).toBeDefined();
  });

  it('should extend BoardDto', () => {
    const dto = new BoardUpdateResponseDto();
    expect(dto).toBeInstanceOf(BoardDto);
  });
});
