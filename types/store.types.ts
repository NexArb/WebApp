export type ModalState = {
  showModal: boolean
  toggleModal: () => void
}

export type UserState = {
  user: string | null
  setUser: (args0: string) => void
  token: string | null
  setToken: (arg0: string) => void
}
