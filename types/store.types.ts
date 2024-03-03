export type ModalState = {
  showModal: Record<string, boolean> // Parametre adına göre boolean değerleri içerecek bir obje
  toggleModal: (modalName: string) => void // Parametre adına göre modalı açıp kapatmak için
  closeAllModals: () => void // Tüm modalları kapatmak için
}

export type UserState = {
  token: string | null
  isAuthenticated: boolean
  setToken: (arg0: string) => void
  setIsAuthenticated: () => void
}
