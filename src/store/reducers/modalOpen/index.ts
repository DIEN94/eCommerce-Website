import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface modalProps {
  id: string;
  isOpen: boolean;
}

interface ModalState {
  modals: modalProps[];
}

  const getInitialModalState = () => {
    const storedState = localStorage.getItem("modalsState");
    const initialState: ModalState = storedState
      ? JSON.parse(storedState)
      : { modals: [] };
    return initialState;
  };

const initialState:ModalState = getInitialModalState()

export const openModalSlice = createSlice({
    name: 'modalOpen',
    initialState,
    reducers: {
      openModal(state, action: PayloadAction<string>) {
        const modalId = action.payload;
        const existingModal = state.modals.find((modal) => modal.id === modalId);
  
        if (existingModal) {
          existingModal.isOpen = true;
        } else {
          state.modals.push({ id: modalId, isOpen: true });
        }
  
        localStorage.setItem("modalsState", JSON.stringify(state));
      },
      closeModal(state, action: PayloadAction<string>) {
        const modalId = action.payload;
        const existingModal = state.modals.find((modal) => modal.id === modalId);
  
        if (existingModal) {
          existingModal.isOpen = false;
        }
  
        localStorage.setItem("modalsState", JSON.stringify(state));
      },
    },
})

export const { openModal, closeModal } = openModalSlice.actions;
export default openModalSlice.reducer;