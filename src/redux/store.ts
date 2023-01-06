import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './filters'
import transactionsReducer from './transactions'
import modalReducer from './modal'

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    transactions: transactionsReducer,
    modal: modalReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch