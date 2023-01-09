import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  isToggled: boolean;
  list: Filter[];
}

const initialState: InitialState = {
  isToggled: true,
  list: []
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Filter>) => {state.list.push(action.payload)},
    edit: (state, action: PayloadAction<Filter>) => {
      const { transaction } = action.payload
      const list = state.list.map(filter => {
        if (filter.transaction !== transaction) return filter
        return action.payload
      })
      return {...state, list}
    },
    del: (state, action: PayloadAction<Filter>) => {
      const { transaction } = action.payload
      const list = state.list.filter(filter => filter.transaction !== transaction)
      return {...state, list}
    },
    toggle: (state) => {state.isToggled = !state.isToggled}
  }
})

export const { add, edit, del, toggle } = filtersSlice.actions

export default filtersSlice.reducer