import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface OpenModalState {
  isOpen: boolean;
}

const initialState:OpenModalState = {
    isOpen: false
}

export const openModalSlice = createSlice({
    name: 'modalOpen',
    initialState,
    reducers: {
        setOpen(state, action: PayloadAction<boolean>) {
          state.isOpen = action.payload;
        },
      },
})

export const { setOpen } = openModalSlice.actions;
export default openModalSlice.reducer;