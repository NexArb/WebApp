import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { sha256 } from 'js-sha256'

import { ModalState, FormState, UserState } from './types'

export const useModalStore = create<ModalState>((set) => ({
  showModal: false,
  toggleModal: () => set((state) => ({ showModal: !state.showModal }))
}))

export const useStepStore = create<FormState>((set, get) => ({
  step: 0,
  nextStep: () => {
    const { step } = get()
    set({ step: step + 1 })
  },
  prevStep: () => {
    const { step } = get()
    set({ step: step - 1 })
  },
  resetStep: () => set({ step: 0 })
}))

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      rememberDevice: false,
      setRememberDevice: (value: boolean) =>
        set((state) => ({ rememberDevice: value })),
      emailOrPhone: '',
      setEmailOrPhone: (event: React.ChangeEvent<HTMLInputElement>) =>
        set({ emailOrPhone: event.target.value }),
      user: null,
      token: null,
      error: null,
      isAuthenticated: false,
      login: (token) => set({ token, isAuthenticated: true }),
      // async (user) => {
      //   try {
      //     // Hash the password on the client side
      //     const hashedPassword = sha256(user.password)
      //     // Send a request to the server to authenticate the user
      //     const response = await fetch('/login', {
      //       method: 'POST',
      //       headers: { 'Content-Type': 'application/json' },
      //       body: JSON.stringify({
      //         email: user.email,
      //         password: hashedPassword
      //       })
      //     })
      //     const data = await response.json()
      //     // Update the user state with the returned data
      //     set({ user: data.user, error: null })
      //   } catch (error: unknown) {
      //     if (error instanceof Error) {
      //       set({ error: error.message })
      //     } else {
      //       set({ error: 'An error occurred.' })
      //     }
      //   }
      // },
      register: async (user) => {
        try {
          // Hash the password on the client side
          const hashedPassword = sha256(user.password)
          // Send a request to the server to register the user
          const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: user.email,
              password: hashedPassword
            })
          })
          const data = await response.json()
          // Update the user state with the returned data
          set({ user: data.user, error: null })
        } catch (error: unknown) {
          if (error instanceof Error) {
            set({ error: error.message })
          } else {
            set({ error: 'An error occured.' })
          }
        }
      },
      logout: () => set({ user: null, error: null })
    }),
    {
      name: 'auth'
      // skipHydration: true
    }
  )
)
