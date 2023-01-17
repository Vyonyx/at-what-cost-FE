import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const USER_ID = import.meta.env.VITE_USER_ID;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3010/api" }),
  tagTypes: ["Filters"],
  endpoints: (builder) => ({
    getFilters: builder.query<Filter[], { id: number }>({
      query: ({ id }) => `/filters/` + id,
      providesTags: [{ type: "Filters", id: "LIST" }],
    }),
    addFilter: builder.mutation<
      Filter,
      { userId: string; transaction: string; category: string }
    >({
      query: (args) => {
        const { userId } = args;
        return {
          url: "/filters/" + userId,
          method: "POST",
          body: args,
        };
      },
      invalidatesTags: [{ type: "Filters", id: "LIST" }],
    }),
    editFilter: builder.mutation<Filter, Filter>({
      query: (args) => {
        const { userId, id: filterId, transaction, category } = args;
        return {
          url: `/filters/${userId}/${filterId}`,
          method: "PATCH",
          body: { transaction, category },
        };
      },
      invalidatesTags: [{ type: "Filters", id: "LIST" }],
    }),
  }),
});

export const {
  useGetFiltersQuery,
  useAddFilterMutation,
  useEditFilterMutation,
} = apiSlice;
