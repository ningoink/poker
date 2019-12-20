export enum CardKey {
  Joker, Ace, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King
}

export enum CardSuit {
  Jokers, Spades, Hearts, Clubs, Diamonds,
}

export enum UserGender {
  Male,
  Female,
  Other,
}

export interface PokerCard {
  key: CardKey
  type: CardSuit
  coder: string
  gender: UserGender
  avatar: string
  milestone: { year: number, event: string }[]
  quote: string
}