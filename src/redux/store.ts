import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filters";
import transactionsReducer from "./transactions";
import modalReducer from "./modal";
import userReducer from "./user";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    transactions: transactionsReducer,
    modal: modalReducer,
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({}).concat([apiSlice.middleware]);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
