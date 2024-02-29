import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { ModalState, UserState } from '@/types/store.types'

export const useModalStore = create<ModalState>((set) => ({
  showModal: false,
  toggleModal: () => set((state) => ({ showModal: !state.showModal }))
}))

export const useUserStore = create<UserState>()((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: () =>
    set((state) => ({ isAuthenticated: !state.isAuthenticated }))
}))
