export type ModalState = {
  showModal: boolean
  toggleModal: () => void
}

export type User = {
  name?: string
  email: string
  password: string
}

export type UserState = {
  rememberDevice: boolean
  setRememberDevice: (value: boolean) => void
  emailOrPhone: string
  setEmailOrPhone: (event: React.ChangeEvent<HTMLInputElement>) => void
  isAuthenticated: boolean
  user: User | null
  token: string | null
  error: string | null
  login: (token: string) => void
  // (user: User) => Promise<void>
  register: (user: User) => Promise<void>
  logout: () => void
}
