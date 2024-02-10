import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { ModalState, UserState } from '@/types/store.types'

export const useModalStore = create<ModalState>((set) => ({
  showModal: false,
  toggleModal: () => set((state) => ({ showModal: !state.showModal }))
}))

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token })
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
