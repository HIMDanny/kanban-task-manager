# Kanban Task Manager

App for task management

## Workspaces

### 💚 Backend

- [Nest.js](https://nestjs.com/) — A Backend framework based on Node.js
- [Prisma](https://www.prisma.io/) — Typescript-oriented ORM

### 💛 Frontend

- [React](https://react.dev/) - The Frontend library based on Javascript
- [Redux Toolkit](https://redux-toolkit.js.org/) - A state manager
- [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview) - addon for Redux Toolkit for caching and fetching data

### 💙 Shared

- [Zod](https://zod.dev/) - Typescript-oriented validation

## Code Quality

Soon

## Database schema

Soon

```mermaid
erDiagram
 board {
    int id PK
    dateTime created_at
    dateTime updated_at
    varchar name
  }
  column {
    int id PK
    dateTime created_at
    dateTime updated_at
    varchar name
    bytea color
  }

 board ||--|{ task : board_id
 column ||--|{ task : column_id
  task {
    int id PK
    dateTime created_at
    dateTime updated_at
    int board_id FK
    int column_id FK
    varchar title
    text description "may be null if user doesn't provide description"
    varchar status FK
  }
  task ||--|{ subtask : task_id
  subtask {
    int id PK
    dateTime created_at
    dateTime updated_at
    int task_id FK
    varchar title
  }
```

## Application schema

Soon

## Local setup

Soon
