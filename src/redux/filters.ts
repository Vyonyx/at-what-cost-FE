import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  isToggled: boolean;
  list: Filter[];
}

const initialState: InitialState = {
  isToggled: false,
  list: [
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
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Filter>) => {state.list.push(action.payload)},
    edit: (state, action: PayloadAction<Filter>) => {
      const { id } = action.payload
      const list = state.list.map(filter => {
        if (filter.id !== id) return filter
        return action.payload
      })
      return {...state, list}
    },
    del: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const list = state.list.filter(filter => filter.id !== id)
      return {...state, list}
    },
    toggle: (state) => {state.isToggled = !state.isToggled}
  }
})

export const { add, edit, del, toggle } = filtersSlice.actions

export default filtersSlice.reducer