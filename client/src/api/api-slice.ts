import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Board } from '../types/board';

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL as string,
  }),
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getBoards: builder.query<Board[], void>({
      query: () => '/boards',
    }),
  }),
});

const { useGetBoardsQuery } = apiSlice;

export { apiSlice, useGetBoardsQuery };
