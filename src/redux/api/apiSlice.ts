import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { number, string, z } from "zod";

const USER_ID = import.meta.env.VITE_USER_ID;
const API_URL = import.meta.env.VITE_API_URL;

const UserDetailsSchema = z.object({
  name: string().optional(),
  email: string().email("Invalid email address"),
  password: string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});

const APIUserDataSchema = z.object({
  name: string(),
  email: string().email(),
  id: number(),
  token: string(),
});

type UserDetails = z.infer<typeof UserDetailsSchema>;
type APIUserData = z.infer<typeof APIUserDataSchema>;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Filters"],
  endpoints: (builder) => ({
    getFilters: builder.query<Filter[], { id: number }>({
      query: ({ id }) => `/filters/` + id,
      providesTags: [{ type: "Filters", id: "LIST" }],
    }),
    addFilter: builder.mutation<
      Filter,
      {
        userId: number;
        transaction: string;
        category: string;
        id: number | null;
      }
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
    addUser: builder.mutation<APIUserData, UserDetails>({
      query: (args) => {
        return {
          url: "/users/signup",
          method: "POST",
          body: args,
        };
      },
    }),
    checkUser: builder.mutation<APIUserData, UserDetails>({
      query: (args) => {
        return {
          url: "/users/login",
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
  useCheckUserMutation,
} = apiSlice;
