export type DashboardState = {
  showModal: boolean
  toggleModal: () => void
}

export type FormState = {
  step: number
  nextStep: () => void
  prevStep: () => void
  resetStep: () => void
}

export type User = {
  name?: string
  email: string
  password: string
}

export type UserState = {
  showModal: boolean
  toggleModal: () => void
  isAuthenticated: boolean
  user: User | null
  token: string | null
  error: string | null
  login: (user: User) => Promise<void>
  register: (user: User) => Promise<void>
  logout: () => void
}
