class TaskDto {
  id: number;

  createdAt: Date;

  updatedAt: Date;

  title: string;

  description: string | null;

  columnId: number;

  status: string;
}
export { TaskDto };
