import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  isOpen: boolean;
  isAdd: boolean;
  isEdit: boolean;
  transaction: string;
  filterId: number | null;
};

const initialState: InitialState = {
  isOpen: false,
  isAdd: false,
  isEdit: false,
  transaction: "",
  filterId: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleIsAdd: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.isAdd = true;
      state.transaction = action.payload;
    },
    toggleIsEdit: (
      state,
      action: PayloadAction<{ transaction: string; id: number | null }>
    ) => {
      const { transaction, id } = action.payload;
      state.isOpen = true;
      state.isEdit = !state.isEdit;
      state.transaction = transaction;
      state.filterId = id;
    },
    resetModal: () => initialState,
  },
});

export const { toggleIsAdd, toggleIsEdit, resetModal } = modalSlice.actions;
export default modalSlice.reducer;
