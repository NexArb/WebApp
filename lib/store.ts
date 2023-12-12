import { create } from 'zustand'

type ModalState = {
  showModal: boolean
  toggleModal: () => void
}

type State = {
  step: number
  nextStep: () => void
  prevStep: () => void
  resetStep: () => void
}

export const useModalStore = create<ModalState>((set) => ({
  showModal: false,
  toggleModal: () => set((state) => ({ showModal: !state.showModal }))
}))

export const useStepStore = create<State>((set, get) => ({
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
