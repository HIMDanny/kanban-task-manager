class TaskCreateRequestDto {
  title: string;

  description: string | null;

  columnId: number;

  status: string;

  column: {
    connect: {
      id: number;
    };
  };
}
export { TaskCreateRequestDto };
