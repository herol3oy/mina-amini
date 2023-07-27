import { PortfolioItem } from '@/types/artist-portfolio'
import Image from 'next/image'
import { data } from '../data'

const PortfolioPage = async ({ params }: { params: { slug: string } }) => {
  const portfolioItem: PortfolioItem[] = data.portfolioItems.filter(
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
                  className="w-full bg-gradient-to-r from-cyan-200 to-blue-200"
                  src={image.url}
                  alt={image.title ? image.title : 'Mina Amini Portfolio'}
                  width={0}
                  height={0}
                  sizes="100vw"
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
            images.length === 1 ? 'w-full text-center' : 'w-4/12 text-start'
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
