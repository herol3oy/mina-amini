import { PortfolioItemBACKUP } from '@/types/artist-portfolio'
import Image from 'next/image'

const PortFolioCard = ({ portfolio }: { portfolio: PortfolioItemBACKUP }) => (
  <Image
    className="translate-hover mb-5 w-full gap-2 rounded-sm bg-gradient-to-r from-cyan-200 to-blue-200"
    src={portfolio.thumbnail}
    alt={portfolio.title}
    width={0}
    height={0}
    sizes='100vw'
  />
)
export default PortFolioCard
