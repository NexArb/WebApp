import { create } from 'zustand'

import { ModalState, UserState } from '@/types/store.types'

export const useModalStore = create<ModalState>((set) => ({
  showModal: {},
  toggleModal: (modalName) =>
    set((state) => ({
      showModal: {
        ...state.showModal,
        [modalName]: !state.showModal[modalName]
      }
    })),
  closeAllModals: () => set({ showModal: {} })
}))

export const useUserStore = create<UserState>()((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: () =>
    set((state) => ({ isAuthenticated: !state.isAuthenticated }))
}))
