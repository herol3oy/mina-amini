import { ArtistPortfolio } from '@/app/data'
import Image from 'next/image'
import Link from 'next/link'

const PortFolioCard = ({ portfolio }: { portfolio: ArtistPortfolio }) => (
  <Link className="my-2 aspect-auto w-full" href={portfolio.slug}>
    <Image
      className="translate-hover mb-5 gap-2 rounded-sm"
      src={portfolio.thumbnail}
      width={600}
      height={400}
      alt={portfolio.title}
      placeholder='empty'
    />
  </Link>
)
export default PortFolioCard
