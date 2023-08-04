import { PortableTextBlock } from 'sanity'

export interface ArtistPortfolio {
  portfolioItems: PortfolioItem[]
  artistPortrait: string
  vita: YearDescription[]
  ausstellungen: Ausstellungen[]
  stipendienUndPreise: YearDescription[]
  sammlungen: string[]
}

interface PortfolioImage {
  url: string
  title?: string
  description?: string
}

interface YearDescription {
  year: string
  description: string
}

interface Ausstellungen {
  year: string
  description: string[]
}

export interface PortfolioItem {
  id: string
  thumbnail: string
  title: string
  slug: string
  content: string
  images: PortfolioImage[]
}


export interface PortfolioItemBACKUP {
  _id: string
  title: string
  thumbnail: string
  slug: string
}

export interface PortfolioContent {
  content: PortableTextBlock[]
}