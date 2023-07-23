import Image from 'next/image'
import Link from 'next/link'

const MINA_PORTRAIT =
  'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071391/mina-amini/mina-amini_elxawr.jpg'

const VITA = [
  {
    year: '1988',
    description: 'Geb. in Maschhad, Iran',
  },
  {
    year: '2003-2005',
    description: 'Abitur. Bildende Kunst, Raafati Kunstschule, Maschhad, Iran',
  },

  {
    year: '2005',
    description: 'Keramik Ausbildung',
  },
  {
    year: '2003-2005',
    description:
      'Restaurierungausbildung der traditionellen Darstellungen in der Keramikwerkstatt der Organisation für Kulturerbe, Kunsthandwerk und Tourismus Maschhad, Iran',
  },
  {
    year: '2006-2008',
    description:
      'Abschluss Bildende Kunst und Malerei, Al-Zahra College der Bildenden Kunst, Maschhad, Iran',
  },
  {
    year: '2009-2012',
    description:
      'Bachelor. Bildende Kunst und Malerei, Ferdowsi Universität Nyschabur, Iran',
  },
  {
    year: '2012-2018',
    description: 'Studiert Freie Kunst. Bauhaus-Universität Weimar',
  },
]

const AUSSTELLUNGEN = [
  {
    year: '2013',
    description: [
      'FKK (Freie Kunst Kultur) Bauhaus-Universität, Weimar',
      'Wild nach Kunst, Bauhaus-Universität, Weimar',
    ],
  },
  {
    year: '2014',
    description: [
      'Stein Schere Papier, Bauhaus-Universität, Weimar',
      'Transit, Bauhaus- Universität, Weimar',
      'Wunderkammer, Bauhaus-Universität, Weimar',
      'Transit, Nagoya Zokei Universität - Nagoya, Japan',
      'Transit, NZU Gallerie Koganecho Yokohama, Japan',
      'Im Rahmenprogramm der Yokohama Triennale',
    ],
  },
  {
    year: '2015',
    description: [
      'Transit, Bauhaus-Universität, Weimar',
      'What’s so funny? Bauhaus-Universität, Weimar',
      'Transit II, Bauhaus-Universität, Weimar',
    ],
  },
  {
    year: '2016',
    description: [
      'Streitfeld, München',
      'Work Situation, Bauhaus-Universität, Weimar',
    ],
  },
  {
    year: '2017',
    description: [
      'Winter Show, Bauhaus-Universität, Weimar',
      'Materialschlacht, Bauhaus-Universität, Weimar',
      'Bauhaus Essentials, marke.6, Weimar',
    ],
  },
  {
    year: '2018',
    description: [
      'Reassessing Material, University of Bella Arts Barcelona, Spanien',
      'Der weibliche Krieg, Bauhaus-Universität, Weimar',
    ],
  },

  {
    year: '2019',
    description: [
      'Materie Neu Denken, Khulna, Bangladesch',
      'Materie Neu Denken, Sala 1, Rom, Italien',
    ],
  },
  {
    year: 'Aug. 2018- Okt. 2019',
    description: ['Elternzeit'],
  },
]

const STIPENDIEN_UND_PREISE = [
  {
    year: '2013',
    description: 'Nominierung für Marion Ermer Preis',
  },
  {
    year: '2015',
    description: 'DAAD Preis für besonderes interkulturelles Engagement',
  },
  {
    year: '2017',
    description: 'Bauhaus Essentials Preis',
  },
  {
    year: '2019',
    description:
      'STIBET Abschluß Stipendium des International Office der Bauhaus-Universität, Weimar, gefördet durch den DAAD',
  },
]

const SAMMLUNGEN = [
  'Archiv der Moderne, Bauhaus-Universität Weimar',
  'Iranhaus Weimar',
  'Privatsammlungen: Iran, Jerusalem, Wien, Irland',
]
const Info = () => {
  return (
    <div className="flex flex-col gap-5">
      <section>

        <Image className='2xl:w-4/12' src={MINA_PORTRAIT} width={800} height={600} alt="Mina Amini" />
        <figcaption>
          <small>@Shabnam Qaderi</small>
        </figcaption>
      </section>

      <div className="flex flex-col gap-10">
        <p className="columns-1 md:columns-2 lg:columns-3">
          Mina Amini wurde 1988 im Iran geboren. Sie hat im Iran Malerei
          studiert und im Jahr 2012 ist sie nach Deutschland ausgewandert. Sie
          hat an der Bauhaus Universität Weimar Freie Kunst bei Liz Bachhuber
          studiert. Während ihres Studiums erhielt sie zwei Mal DAAD Preise. Sie
          schließt ihr Studium im Jahr 2018 ab. Mina Amini beschäftigt sich mit
          den Themen wie Frauen und Kinderrecht, Sexualität, Konflikte und
          Krieg. Sie verwendet die Materialien wie Keramik, Porzellan, Knochen,
          Beton, Haare, Holz, ... mit verschieden künstlerischen Medien wie
          Installation, Skulptur, Malerei, Foto, Häkeln und Nähen. Ihre Arbeiten
          wurden in Europa, Iran, Japan und Bangladesch ausgestellt. Sie lebt
          seit 2018 mit ihrer Familie in Kassel.
        </p>

        <section>
          <h1 className="mb-5 text-xl font-bold md:text-4xl">Portfolio</h1>
          Bitte laden Sie das {` `}
          <Link
            className="text-hover underline"
            href="/mina-amini-portfolio.pdf"
          >
            PDF-Format
          </Link>
          {` `}
          herunter.
        </section>

        <section>
          <h1 className="mb-5 text-xl font-bold md:text-4xl">VITA</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {VITA.map((vita) => (
              <div key={vita.description} className="flex flex-col">
                <h2 className="font-bold">{vita.year}</h2>
                <p>{vita.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h1 className="mb-5 text-xl font-bold md:text-4xl">Ausstellungen</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {AUSSTELLUNGEN.map((ausstellungen) => (
              <div key={ausstellungen.year} className="flex flex-col">
                <h2 className="font-bold">{ausstellungen.year}</h2>
                {ausstellungen.description.map((a) => (
                  <p key={a}>{a}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h1 className="mb-5 text-xl font-bold md:text-4xl">
            Stipendien und Preise
          </h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {STIPENDIEN_UND_PREISE.map((stipendien) => (
              <div key={stipendien.description} className="flex flex-col">
                <h2 className="font-bold">{stipendien.year}</h2>
                <p>{stipendien.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h1 className="mb-5 text-xl font-bold md:text-4xl">
            Arbeiten in Publikationen
          </h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col">
              <h2 className="font-bold">2016</h2>
              <p>
                Transit - The Japanese Journey, Bauhaus Universitätsverlag, ISBN
                978-3-89739-883-2
              </p>
            </div>
          </div>
        </section>

        <section>
          <h1 className="mb-5 text-xl font-bold md:text-4xl">Sammlungen</h1>
          <div className="grid grid-cols-1 gap-4">
            {SAMMLUNGEN.map((sammlungen) => (
              <div key={sammlungen} className="flex flex-col">
                <p>{sammlungen}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Info
