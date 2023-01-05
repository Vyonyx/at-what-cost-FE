import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: any[] = []

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    upload: (state, action: PayloadAction<any[]>) => {return action.payload},
    clear: (state) => {return initialState}
  }
})

export const { upload, clear } = transactionsSlice.actions
export default transactionsSlice.reducer