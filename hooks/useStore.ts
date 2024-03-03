import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { ModalState, UserState } from '@/types/store.types'

export const useModalStore = create<ModalState>((set) => ({
  showModal: {},
  toggleModal: (modalName) =>
    set((state) => ({
      showModal: {
        ...state.showModal,
        [modalName]: !state.showModal[modalName] // toggleModal(key) triggerlandığında gönderilen key'e ait modalı açmak veya kapatma işlemi
      }
    })),
  closeAllModals: () => set({ showModal: {} }) // Tüm modalları kapatma işlemi
}))

export const useUserStore = create<UserState>()((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: () =>
    set((state) => ({ isAuthenticated: !state.isAuthenticated }))
}))
