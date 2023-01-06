import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isOpen: boolean;
  isAdd: boolean;
  isEdit: boolean;
}

const initialState: InitialState = {
  isOpen: false,
  isAdd: false,
  isEdit: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleIsOpen: (state) => {state.isOpen = !state.isOpen},
    toggleIsAdd: (state) => {state.isAdd = !state.isAdd},
    toggleIsEdit: (state) => {state.isEdit = !state.isEdit},
    resetModal: (state) => initialState
  }
})

export const { toggleIsOpen, toggleIsAdd, toggleIsEdit, resetModal } = modalSlice.actions
export default modalSlice.reducer