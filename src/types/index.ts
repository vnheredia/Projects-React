
export type Screen = "home" | "sum" | "calculator" | "search" | "details"

export interface ShowImage {
  medium: string
  original: string
}

export interface ShowRating {
  average: number | null
}

export interface Show {
  id: number
  name: string
  summary: string | null
  image: ShowImage | null
  rating: ShowRating
  genres: string[]
  status: string
  language: string
}

export interface SearchResult {
  score: number
  show: Show
}