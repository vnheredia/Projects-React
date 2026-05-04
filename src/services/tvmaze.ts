import { SearchResult } from "../types"

const BASE_URL = "https://api.tvmaze.com"

export async function searchShows(query: string): Promise<SearchResult[]> {
  const res = await fetch(`${BASE_URL}/search/shows?q=${query}`)

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`)
  }

  const data: SearchResult[] = await res.json()
  return data
}