import { createURL } from './create-url'

export const getAllPortfolioData = async () => {
  const res = await fetch(('http://localhost:3001/api/getAllPortfolios'))
  const data = await res.json

  return data
}
