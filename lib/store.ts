import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { sha256 } from 'js-sha256'

import { DashboardState, FormState, UserState } from './types'

export const useDashboardStore = create<DashboardState>((set) => ({
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
    (set) => ({
      showModal: false,
      toggleModal: () => set((state) => ({ showModal: !state.showModal })),
      user: null,
      token: null,
      error: null,
      isAuthenticated: false,
      login: async (user) => {
        try {
          // Hash the password on the client side
          const hashedPassword = sha256(user.password)
          // Send a request to the server to authenticate the user
          const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: user.email,
              password: hashedPassword
            })
          })
          const data = await response.json()
          // Update the user state with the returned data
          set({ user: data.user })
        } catch (error) {
          console.error('Error during login:', error)
        }
      },
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
          set({ user: data.user })
        } catch (error) {
          console.error('Error during registration:', error)
        }
      },
      logout: () => set({ user: null })
    }),
    {
      name: 'auth'
      // skipHydration: true
    }
  )
)

