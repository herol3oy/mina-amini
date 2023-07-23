import Link from 'next/link'

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

const TopBar = () => (
  <nav className="flex flex-col items-center gap-2 py-12 md:flex-row md:justify-between">
    <Link href="/" className="text-hover">
      <h1 className="text-3xl font-bold md:text-5xl">Mina Amini</h1>
    </Link>
    <ul className="flex items-center gap-1">
      {NAVIGATION.map((nav) => (
        <Link
          className="w-28 p-2 text-center text-slate-400 transition-all duration-300 hover:rounded-full hover:bg-slate-200 hover:text-slate-400"
          href={nav.name}
          key={nav.name}
        >
          <li>{nav.name.toUpperCase()}</li>
        </Link>
      ))}
    </ul>
  </nav>
)

export default TopBar
