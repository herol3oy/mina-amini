import { ArtistPortfolio } from '@/app/data'
import { Image } from '@unpic/react'

const PortFolioCard = ({ portfolio }: { portfolio: ArtistPortfolio }) => (
  <Image
    className="translate-hover mb-5 w-full gap-2 rounded-sm"
    src={portfolio.thumbnail}
    alt={portfolio.title}
    layout='fullWidth'
    background="linear-gradient(90deg, hsla(233, 100%, 90%, 1) 0%, hsla(0, 0%, 89%, 1) 100%)"
  />
)
export default PortFolioCard
