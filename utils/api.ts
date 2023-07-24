import { createURL } from './create-url'

export const getAllPortfolioData = async () => {
  const res = await fetch('http://localhost:3000/api/getAllPortfolios', {
    cache: 'no-cache',
  })
  const data = await res.json()

  return data
}
