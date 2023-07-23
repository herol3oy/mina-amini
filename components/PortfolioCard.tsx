import { ArtistPortfolio } from '@/app/data'
import Image from 'next/image'

const PortFolioCard = ({ portfolio }: { portfolio: ArtistPortfolio }) => (
  <Image
    className="translate-hover mb-5 gap-2 rounded-sm"
    src={portfolio.thumbnail}
    width={600}
    height={400}
    alt={portfolio.title}
    placeholder="empty"
  />
)
export default PortFolioCard
