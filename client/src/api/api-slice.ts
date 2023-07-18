import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Board, Column } from './types/types';

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL as string,
  }),
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getBoards: builder.query<Board[], void>({
      query: () => '/boards',
    }),
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getColumns: builder.query<Column[], void>({
      query: () => '/columns',
    }),
  }),
});

const { useGetBoardsQuery, useGetColumnsQuery } = apiSlice;

export { apiSlice, useGetBoardsQuery, useGetColumnsQuery };
