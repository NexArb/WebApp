import { create } from 'zustand'

type ModalState = {
  showModal: boolean
  toggleModal: () => void
}

export const useModalStore = create<ModalState>((set) => ({
  showModal: false,
  toggleModal: () => set((state) => ({ showModal: !state.showModal }))
}))
