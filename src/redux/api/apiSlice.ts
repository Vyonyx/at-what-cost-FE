import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3010/api" }),
  tagTypes: ["Filters"],
  endpoints: (builder) => ({
    getFilters: builder.query<Filter[], string | number>({
      query: (id) => `/filters/` + id,
      providesTags: [{ type: "Filters", id: "LIST" }],
    }),
  }),
});

export const { useGetFiltersQuery } = apiSlice;
