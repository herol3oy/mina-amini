import { Image } from '@unpic/react'
import Link from 'next/link'
import { data } from '../../data'

const Info = () => {
  return (
    <div className="flex flex-col gap-5">
      <section>
        <Image
          className="2xl:w-4/12"
          src={data.artistPortrait}
          width={800}
          height={600}
          alt="Mina Amini"
          layout="fixed"
          background="linear-gradient(90deg, hsla(233, 100%, 90%, 1) 0%, hsla(0, 0%, 89%, 1) 100%)"
        />
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
            {data.vita.map((vita) => (
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
            {data.ausstellungen.map((ausstellungen) => (
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
            {data.stipendienUndPreise.map((stipendien) => (
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
            {data.sammlungen.map((sammlungen) => (
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
