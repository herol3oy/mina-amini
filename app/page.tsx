import PortFolioCard from '@/components/PortfolioCard'
import { getAllPortfolioData } from '@/utils/api'
import Link from 'next/link'
import { ArtistPortfolio } from './data'

const Home = async () => {
  const { data: portfolioItems }: { data: ArtistPortfolio[] } =
    await getAllPortfolioData()

  return (
    <main className="columns-1 gap-5 md:columns-2 lg:columns-3">
      {portfolioItems.map((portfolio: ArtistPortfolio) => (
        <Link
          className="my-2 aspect-auto w-full"
          href={portfolio.slug}
          key={portfolio.id}
        >
          <PortFolioCard portfolio={portfolio} />
        </Link>
      ))}
    </main>
  )
}

export default Home
