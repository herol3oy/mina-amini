import Image from 'next/image'
import { ArtistPortfolio } from '../data'
import { getAllPortfolioData } from '@/utils/api'

const PortfolioPage = async ({ params }: { params: { slug: string } }) => {
  const { data: portfolioItems }: { data: ArtistPortfolio[] } =
    await getAllPortfolioData()

  const portfolioItem: ArtistPortfolio[] = portfolioItems.filter(
    (p) => params.slug === p.slug,
  )

  const { images, title, content } = portfolioItem[0]

  return (
    <div className="flex flex-col gap-10">
      <div
        className={`mx-auto w-8/12 columns-1 gap-5 ${
          images.length === 1 ? 'md:columns-1' : 'w-full md:columns-2'
        }`}
      >
        {
          <>
            {images.map((image, index) => (
              <div
                className={`flex aspect-auto w-full flex-col items-center gap-5 text-start ${
                  index === 0 ? 'mb-5' : 'my-5'
                }`}
                key={image.url}
              >
                <Image
                  className="w-full"
                  src={image.url}
                  width={600}
                  height={400}
                  alt={image.title ? image.title : 'Mina Amini Portfolio'}
                />
                {(image.title || image.description) && (
                  <div className="w-full text-start">
                    <h1 className="text-2xl font-bold">{image.title}</h1>
                    <p>{image.description}</p>
                  </div>
                )}
              </div>
            ))}
          </>
        }
      </div>
      {(title || content) && (
        <div
          className={`flex flex-col gap-3 ${
            images.length === 1 ? 'text-center w-full' : 'text-start w-4/12'
          }`}
        >
          <h1 className="text-lg font-bold md:text-2xl">{title}</h1>
          <p>{content}</p>
        </div>
      )}
    </div>
  )
}

export default PortfolioPage
