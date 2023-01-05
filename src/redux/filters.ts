import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Filter[] = [
  {
    id: 1,
    transaction: 'BP',
    category: 'Vehicle'
  },
  {
    id: 2,
    transaction: 'Raglan Roast',
    category: 'Food & Drink'
  },
]

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Filter>) => {state.push(action.payload)},
    edit: (state, action: PayloadAction<Filter>) => {
      const { id } = action.payload
      return state.map(filter => {
        if (filter.id !== id) return filter
        return action.payload
      })
    },
    delete: (state, action: PayloadAction<number>) => {
      const id = action.payload
      return state.filter(filter => filter.id !== id)
    }
  }
})

export default filtersSlice.reducer