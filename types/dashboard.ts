export interface Listing {
  id: string
  user_id: string
  seller_username: string
  amount: number
  total_price: number
  currency: string
  is_deleted: boolean
  is_active: boolean
}

export interface Offer {
  id: string,
  user_id: string
  status: string
  listing_id: string
  seller_username: string
  buyer_username: string
  amount: number
  total_price: number
  coming_from: string
  updates: any[]
  is_deleted: boolean
  is_active: boolean
  is_approved: boolean
}
