import { ModalState, UserState } from '@/types/store'

import Cookies from 'js-cookie'
import { create } from 'zustand'

const cookie = Cookies.get('token')
export const modalStore = create<ModalState>((set) => ({
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

export const userStore = create<UserState>((set) => ({
  isAuth: !!cookie,
  setIsAuth: () => set((state) => ({ isAuth: !state.isAuth }))
}))
