import PortFolioCard from '@/components/PortfolioCard'
import { getPortfolioItems } from '@/sanity/sanity-utils'
import { PortfolioItemBACKUP } from '@/types/artist-portfolio'
import Link from 'next/link'

const Home = async () => {
  const portfolios = await getPortfolioItems()

  return (
    <main className="columns-1 gap-5 md:columns-2 lg:columns-3">
      {portfolios.map((portfolio: PortfolioItemBACKUP) => (
        <Link
          className="my-2 aspect-auto w-full"
          href={portfolio.slug}
          key={portfolio._id}
        >
          <PortFolioCard portfolio={portfolio} />
        </Link>
      ))}
    </main>
  )
}

export default Home
