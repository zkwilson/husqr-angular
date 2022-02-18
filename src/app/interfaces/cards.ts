export interface Deck {
  success: boolean
  cards: Card[]
  deck_id: string
  remaining: number
}

export interface Card {
  image: string
  value: string
  suit: string
  code: string
  images: Images[]
}

export interface Images {
  svg: string
  png: string
}
