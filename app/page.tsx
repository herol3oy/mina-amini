import { data } from '@/app/data'
import PortFolioCard from '@/components/PortfolioCard'
import { PortfolioItem } from '@/types/artist-portfolio'
import Link from 'next/link'

const Home = async () => {
  return (
    <main className="columns-1 gap-5 md:columns-2 lg:columns-3">
      {data.portfolioItems.map((portfolio: PortfolioItem) => (
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
