import Image from 'next/image'
import { getPortfolioItem } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'
import { PropsWithChildren } from 'react'

const builder = imageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
})

export const urlFor = (source: string) => builder.image(source)

const PortfolioPage = async ({ params }: { params: { slug: string } }) => {
  const [portfolio] = await getPortfolioItem(params.slug)
  return (
    <article className="grid grid-cols-1 gap-2 md:grid-cols-2 md:flex-row">
      <PortableText
        value={portfolio.content}
        components={portableTextComponents}
      />
    </article>
  )
}

export const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        className="w-full"
        src={urlFor(value.asset._ref).url()}
        width={0}
        height={0}
        sizes="100vw"
        alt="Mina Amini"
      />
    ),
  },
  block: {
    h1: ({ children }: PropsWithChildren) => (
      <h1 className="mt-5 text-xl font-bold text-zinc-700 md:col-span-2 md:text-4xl">
        {children}
      </h1>
    ),
    normal: ({ children }: PropsWithChildren) => (
      <p className="text-zinc-500 md:col-span-2">{children}</p>
    ),
  },
}

export default PortfolioPage
