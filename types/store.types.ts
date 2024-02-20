export type ModalState = {
  showModal: boolean
  toggleModal: () => void
}

export type UserState = {
  token: string | null
  isAuthenticated: boolean
  setToken: (arg0: string) => void
  setIsAuthenticated: () => void
}
