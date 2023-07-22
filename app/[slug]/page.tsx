import { ArtistPortfolio } from '../data'
import Image from 'next/image'

const PortfolioPage = async ({ params }: { params: { slug: string } }) => {
  const res = await fetch('http://localhost:3001/api/getAllPortfolios')
  const { data: singlePortfolioItem }: { data: ArtistPortfolio[] } =
    await res.json()

  const portfolioItem: ArtistPortfolio[] = singlePortfolioItem.filter(
    (p) => params.slug === p.slug,
  )

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {portfolioItem[0].images.map((image) =>
          typeof image === 'string' ? (
            <>
              <Image
                key={image}
                src={image}
                width={600}
                height={400}
                alt={image}
                placeholder="empty"
              />
              <h1 className="text-4xl font-bold">{portfolioItem[0].title}</h1>
              <p className="font-mono text-xl">{portfolioItem[0].content}</p>
            </>
          ) : (
            <div key={image.url} className="flex flex-col gap-5">
              <Image
                src={image.url}
                width={600}
                height={400}
                alt={image.title ? image.title : 'Mina Amini Portfolio'}
                placeholder="empty"
              />
              <div>
                <h1>{image.title}</h1>
                <p>{image.descreption}</p>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  )
}

export default PortfolioPage
