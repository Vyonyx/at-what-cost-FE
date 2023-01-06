import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  isOpen: boolean;
  isAdd: boolean;
  isEdit: boolean;
  transaction: string;
}

const initialState: InitialState = {
  isOpen: false,
  isAdd: false,
  isEdit: false,
  transaction: ''
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleIsAdd: (state, action: PayloadAction<string>) => {
      state.isOpen = true
      state.isAdd = true
      state.transaction = action.payload
    },
    toggleIsEdit: (state, action: PayloadAction<string>) => {
      state.isOpen = true
      state.isEdit = !state.isEdit
      state.transaction = action.payload
    },
    resetModal: () => initialState
  }
})

export const { toggleIsAdd, toggleIsEdit, resetModal } = modalSlice.actions
export default modalSlice.reducer