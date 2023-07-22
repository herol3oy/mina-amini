import Link from 'next/link'
import { ArtistPortfolio } from './data'
import PortFolioCard from '@/components/PortfolioCard'

const NAVIGATION = [
  {
    name: 'info',
    route: '/info',
  },
  {
    name: 'impressum',
    route: '/impressum',
  },
]

const Home = async () => {
  const res = await fetch('http://localhost:3001/api/getAllPortfolios')
  const { data: allPortfolioItems }: { data: ArtistPortfolio[] } =
    await res.json()

  return (
    <>
      <nav className="flex flex-col items-center gap-2 py-12 md:flex-row md:justify-between">
        <Link href="/" className="text-hover">
          <h1 className="text-3xl font-bold md:text-5xl">Mina Amini</h1>
        </Link>
        <ul className="flex items-center gap-5">
          {NAVIGATION.map((nav) => (
            <Link
              className="text-slate-400 transition-all duration-300 hover:text-slate-600"
              href={nav.name}
              key={nav.name}
            >
              <li>{nav.name.toUpperCase()}</li>
            </Link>
          ))}
        </ul>
      </nav>
      <main className="columns-1 gap-5 md:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5">
        {allPortfolioItems.map((portfolio: ArtistPortfolio) => (
          <PortFolioCard key={portfolio.thumbnail} portfolio={portfolio} />
        ))}
      </main>
    </>
  )
}

export default Home
