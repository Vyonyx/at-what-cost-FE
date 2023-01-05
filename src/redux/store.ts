import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './filters'

export const store = configureStore({
  reducer: {
    filtersReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch