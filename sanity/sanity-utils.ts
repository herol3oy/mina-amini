import { groq } from 'next-sanity'

import { PortfolioContent, PortfolioItemBACKUP } from '@/types/artist-portfolio'
import { client } from './lib/client'

export async function getPortfolioItems(): Promise<PortfolioItemBACKUP[]> {
  return client.fetch(
    groq`*[_type == "portfolio"] | order(date desc) {
        _id,
        title,
        "thumbnail": thumbnail.asset->url,
        "slug": slug.current,
    }`,
  )
}

export async function getPortfolioItem(
  slug: string,
): Promise<PortfolioContent[]> {
  return await client.fetch(
    groq`*[_type == "portfolio" && slug.current == '${slug}'] {
        content
    }`,
  )
}
