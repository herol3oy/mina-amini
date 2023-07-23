import { createURL } from './create-url'

// const createURL = (path: string) => window.location ? window.location.origin + path : ''


export const getAllPortfolioData = async () => {
  const res = await fetch('http://localhost:3000/api/getAllPortfolios', {
    cache: 'no-cache',
  })
  const data = await res.json()

  return data
}
