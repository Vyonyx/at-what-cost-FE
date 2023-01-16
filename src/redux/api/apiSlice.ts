import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3010/api" }),
  endpoints: (builder) => ({
    getFilters: builder.query({
      query: (id: string | number) => `/filters/` + id,
    }),
  }),
});

export const { useGetFiltersQuery } = apiSlice;
