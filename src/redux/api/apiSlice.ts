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
        console.log(filterId);
        return {
          url: `/filters/${userId}/${filterId}`,
          method: "PATCH",
          body: { transaction, category },
        };
      },
      invalidatesTags: [{ type: "Filters", id: "LIST" }],
    }),
    deleteFilter: builder.mutation<void, Filter>({
      query: (args) => {
        const { userId, id: filterId } = args;
        return {
          url: `/filters/${userId}/${filterId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [{ type: "Filters", id: "LIST" }],
    }),
    addUser: builder.mutation<
      string,
      { name: string; email: string; password: string }
    >({
      query: (args) => {
        return {
          url: "/users",
          method: "POST",
          body: args,
        };
      },
    }),
  }),
});

export const {
  useGetFiltersQuery,
  useAddFilterMutation,
  useEditFilterMutation,
  useDeleteFilterMutation,
  useAddUserMutation,
} = apiSlice;
